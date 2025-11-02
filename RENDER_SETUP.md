# 🖥️ إعداد Backend على Render - خطوة بخطوة

## 📋 نظرة عامة

Render.com هي منصة مجانية لرفع Backend. سنستخدمها لرفع Node.js API.

---

## 🚀 الخطوات

### 1️⃣ إنشاء حساب على Render

1. اذهب إلى [render.com](https://render.com)
2. اضغط على "Get Started"
3. سجل دخول باستخدام GitHub
4. امنح Render صلاحية الوصول إلى المستودعات

### 2️⃣ إنشاء Web Service جديد

1. من Dashboard، اضغط على "New +"
2. اختر "Web Service"
3. اختر المستودع `e-ecommerce` من القائمة
4. اضغط على "Connect"

### 3️⃣ إعدادات الخدمة

املأ الحقول التالية:

#### Name
\`\`\`
e-ecommerce-backend
\`\`\`
(أو أي اسم تريده)

#### Region
\`\`\`
Singapore (أو الأقرب لك)
\`\`\`

#### Branch
\`\`\`
main
\`\`\`
(أو master حسب اسم الفرع الرئيسي)

#### Root Directory
\`\`\`
backend
\`\`\`
**مهم جداً!** هذا يخبر Render أن يبحث في مجلد backend فقط

#### Runtime
\`\`\`
Node
\`\`\`

#### Build Command
\`\`\`bash
npm install
\`\`\`

#### Start Command
\`\`\`bash
npm start
\`\`\`

#### Instance Type
\`\`\`
Free
\`\`\`

### 4️⃣ متغيرات البيئة (Environment Variables)

اضغط على "Advanced" ثم أضف المتغيرات التالية:

#### DATABASE_URL
\`\`\`
mongodb+srv://username:password@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority
\`\`\`
(استبدل بـ connection string الخاص بك من MongoDB Atlas)

#### JWT_SECRET
\`\`\`
your-super-secret-jwt-key-here-12345
\`\`\`
(اختر مفتاح سري قوي)

#### PORT
\`\`\`
3001
\`\`\`

#### CORS_ORIGIN
\`\`\`
*
\`\`\`
(سنحدثه لاحقاً برابط Frontend من Vercel)

### 5️⃣ Deploy

1. اضغط على "Create Web Service"
2. انتظر 3-5 دقائق حتى ينتهي البناء
3. ستظهر رسالة "Live" باللون الأخضر
4. **احفظ الرابط!** سيكون شكله:
   \`\`\`
   https://e-ecommerce-backend.onrender.com
   \`\`\`

---

## 🗄️ إعداد MongoDB Atlas

إذا لم يكن لديك قاعدة بيانات MongoDB:

### 1. إنشاء حساب
- اذهب إلى [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- سجل حساب مجاني

### 2. إنشاء Cluster
- اختر "Free Shared Cluster"
- اختر Region قريب منك
- اضغط "Create Cluster"

### 3. إنشاء Database User
- اذهب إلى "Database Access"
- اضغط "Add New Database User"
- أدخل username و password
- احفظهم!

### 4. السماح بالاتصالات
- اذهب إلى "Network Access"
- اضغط "Add IP Address"
- اختر "Allow Access from Anywhere" (0.0.0.0/0)
- اضغط "Confirm"

### 5. الحصول على Connection String
- ارجع إلى "Database"
- اضغط "Connect"
- اختر "Connect your application"
- انسخ Connection String
- استبدل `<password>` بكلمة المرور الحقيقية

---

## 🔄 تحديث CORS بعد نشر Frontend

بعد رفع Frontend على Vercel:

1. ارجع إلى Render Dashboard
2. افتح "e-ecommerce-backend"
3. اذهب إلى "Environment"
4. ابحث عن `CORS_ORIGIN`
5. غيّر القيمة من `*` إلى:
   \`\`\`
   https://your-app.vercel.app
   \`\`\`
6. اضغط "Save Changes"
7. سيتم إعادة تشغيل السيرفر تلقائياً

---

## ✅ اختبار Backend

### اختبار بسيط
افتح في المتصفح:
\`\`\`
https://e-ecommerce-backend.onrender.com/products
\`\`\`

يجب أن ترى قائمة المنتجات بصيغة JSON

### اختبار متقدم (Postman)
1. افتح Postman
2. أنشئ طلب GET:
   \`\`\`
   https://e-ecommerce-backend.onrender.com/products
   \`\`\`
3. يجب أن تحصل على استجابة 200 OK

---

## 🐛 حل المشاكل

### المشكلة: Build Failed

**السبب:** خطأ في التثبيت أو الكود

**الحل:**
- افتح "Logs" في Render
- اقرأ رسالة الخطأ
- تأكد من أن `Root Directory` هو `backend`
- تأكد من أن `package.json` موجود في مجلد backend

### المشكلة: Application Error / Crashed

**السبب:** خطأ في الكود أو متغيرات البيئة

**الحل:**
- افتح "Logs" وابحث عن الخطأ
- تأكد من أن `DATABASE_URL` صحيح
- تأكد من أن MongoDB يسمح بالاتصالات من أي IP

### المشكلة: Can't connect to MongoDB

**السبب:** MongoDB لا يسمح بالاتصال

**الحل:**
- اذهب إلى MongoDB Atlas
- Network Access → Add IP Address → 0.0.0.0/0
- تأكد من أن username و password صحيحين في Connection String

### المشكلة: Service Sleeping

**السبب:** Free tier في Render يتوقف بعد 15 دقيقة من عدم الاستخدام

**الحل:**
- هذا طبيعي في النسخة المجانية
- أول طلب سيستغرق 30 ثانية لتشغيل السيرفر
- بعدها سيعمل بشكل طبيعي
- للحل الدائم: ترقية إلى Paid plan

---

## 📊 مراقبة الخدمة

في Render Dashboard يمكنك:
- ✅ رؤية Logs في الوقت الفعلي
- ✅ مراقبة استخدام CPU و Memory
- ✅ رؤية عدد الطلبات
- ✅ إعادة تشغيل الخدمة يدوياً

---

## 🔄 التحديثات التلقائية

- كل push إلى GitHub سيؤدي إلى إعادة النشر تلقائياً
- يمكنك تعطيل Auto-Deploy من الإعدادات
- يمكنك عمل Manual Deploy في أي وقت

---

## 💡 نصائح مهمة

1. **Logs**: دائماً افتح Logs عند حدوث مشكلة
2. **Environment Variables**: لا تشاركها مع أحد
3. **Backups**: احتفظ بنسخة من متغيرات البيئة في مكان آمن
4. **MongoDB**: استخدم MongoDB Atlas (مجاني ومستقر)
5. **Cold Start**: أول طلب قد يستغرق 30 ثانية (طبيعي في Free tier)

---

## 🎯 الخطوة التالية

الآن بعد رفع Backend، اذهب إلى [VERCEL_SETUP.md](./VERCEL_SETUP.md) لرفع Frontend!

---

**تم! 🎉**

Backend الآن يعمل على الإنترنت!

