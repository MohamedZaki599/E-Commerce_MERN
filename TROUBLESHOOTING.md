# 🔧 دليل حل المشاكل الشامل

هذا الدليل يحتوي على حلول لجميع المشاكل المحتملة التي قد تواجهها.

---

## 🚨 مشاكل Vercel (Frontend)

### ❌ المشكلة: 404 NOT_FOUND

**الأعراض:**
- عند فتح رابط Vercel، تظهر صفحة 404
- الصفحة تقول "NOT_FOUND"

**الأسباب المحتملة:**
1. Output Directory خاطئ
2. Build Command خاطئ
3. المشروع لم يُبنى بشكل صحيح

**الحلول:**

#### الحل 1: التحقق من Output Directory
1. اذهب إلى Vercel Dashboard
2. افتح المشروع
3. اذهب إلى Settings → General
4. ابحث عن "Output Directory"
5. تأكد أنه: `frontend/dist`
6. إذا كان مختلفاً، غيّره واحفظ
7. اذهب إلى Deployments
8. اضغط على "Redeploy"

#### الحل 2: التحقق من Build Command
1. Settings → General → Build & Development Settings
2. Build Command يجب أن يكون:
   \`\`\`bash
   cd frontend && npm install && npm run build
   \`\`\`
3. Install Command يجب أن يكون:
   \`\`\`bash
   cd frontend && npm install
   \`\`\`

#### الحل 3: فحص Deployment Logs
1. اذهب إلى Deployments
2. افتح آخر Deployment
3. اضغط على "Building"
4. اقرأ الـ Logs للبحث عن أخطاء
5. إذا وجدت خطأ، أصلحه في الكود وارفع مرة أخرى

---

### ❌ المشكلة: Build Failed

**الأعراض:**
- Deployment يفشل في مرحلة Building
- رسالة "Build Failed" في Vercel

**الأسباب المحتملة:**
1. خطأ في الكود (TypeScript errors)
2. حزم مفقودة
3. أوامر خاطئة

**الحلول:**

#### الحل 1: اختبار البناء محلياً
\`\`\`bash
cd frontend
npm install
npm run build
\`\`\`

إذا فشل محلياً، أصلح الأخطاء قبل الرفع.

#### الحل 2: التحقق من package.json
تأكد من أن `frontend/package.json` يحتوي على:
\`\`\`json
"scripts": {
  "build": "tsc -p tsconfig.app.json --noEmit && vite build"
}
\`\`\`

#### الحل 3: مسح Cache في Vercel
1. Settings → General
2. ابحث عن "Clear Cache"
3. اضغط عليه
4. Redeploy

---

### ❌ المشكلة: API Calls Failing

**الأعراض:**
- الموقع يفتح لكن لا توجد بيانات
- أخطاء في Console: "Network Error" أو "Failed to fetch"

**الأسباب المحتملة:**
1. `VITE_API_URL` خاطئ أو مفقود
2. Backend لا يعمل
3. CORS error

**الحلول:**

#### الحل 1: التحقق من Environment Variable
1. Vercel Dashboard → Settings → Environment Variables
2. تأكد من وجود `VITE_API_URL`
3. تأكد أن القيمة صحيحة: `https://your-backend.onrender.com`
4. تأكد من عدم وجود `/` في النهاية
5. إذا غيّرت شيئاً، Redeploy

#### الحل 2: اختبار Backend
افتح في المتصفح:
\`\`\`
https://your-backend.onrender.com/products
\`\`\`

يجب أن ترى JSON مع قائمة المنتجات.

إذا لم يعمل، المشكلة في Backend (انظر قسم مشاكل Render).

#### الحل 3: فحص CORS
1. افتح Frontend في المتصفح
2. اضغط F12 لفتح Developer Tools
3. اذهب إلى Console
4. إذا رأيت "CORS error"، المشكلة في Backend
5. اذهب إلى قسم "مشاكل CORS" أدناه

---

## 🚨 مشاكل Render (Backend)

### ❌ المشكلة: Build Failed

**الأعراض:**
- Service لا يبدأ
- حالة "Build Failed" في Render

**الأسباب المحتملة:**
1. Root Directory خاطئ
2. package.json مفقود
3. خطأ في الكود

**الحلول:**

#### الحل 1: التحقق من Root Directory
1. Render Dashboard → Service Settings
2. تأكد أن Root Directory: `backend`
3. إذا كان خاطئاً، غيّره واحفظ

#### الحل 2: التحقق من الأوامر
- Build Command: `npm install`
- Start Command: `npm start`

#### الحل 3: فحص Logs
1. افتح Service في Render
2. اذهب إلى Logs
3. اقرأ رسائل الأخطاء
4. أصلح المشكلة في الكود

---

### ❌ المشكلة: Application Error / Crashed

**الأعراض:**
- Service يبني بنجاح لكن يتوقف فوراً
- حالة "Failed" أو "Crashed"

**الأسباب المحتملة:**
1. خطأ في الكود
2. متغيرات البيئة مفقودة
3. MongoDB لا يتصل

**الحلول:**

#### الحل 1: فحص Logs
\`\`\`
1. Render Dashboard → Logs
2. ابحث عن رسالة الخطأ
3. عادة تكون في آخر سطر
\`\`\`

**أخطاء شائعة:**

**"Cannot connect to MongoDB"**
→ انظر قسم "مشاكل MongoDB"

**"JWT_SECRET is not defined"**
→ أضف `JWT_SECRET` في Environment Variables

**"Port already in use"**
→ تأكد من أن `PORT` في Environment Variables

#### الحل 2: التحقق من Environment Variables
تأكد من وجود:
- `DATABASE_URL`
- `JWT_SECRET`
- `PORT`
- `CORS_ORIGIN`

---

### ❌ المشكلة: Service Sleeping / Slow Start

**الأعراض:**
- أول طلب يستغرق 30-60 ثانية
- رسالة "Service is starting"

**السبب:**
- هذا طبيعي في Free Tier
- Render يوقف Service بعد 15 دقيقة من عدم الاستخدام

**الحلول:**

**ليس مشكلة حقيقية!** هذا سلوك طبيعي.

**إذا أردت حلاً:**
1. ترقية إلى Paid Plan ($7/شهر)
2. استخدام خدمة Ping (مثل UptimeRobot) لإبقاء Service نشطاً

---

## 🚨 مشاكل MongoDB

### ❌ المشكلة: Cannot Connect to MongoDB

**الأعراض:**
- Backend يتوقف مع خطأ MongoDB
- Logs تقول "MongoNetworkError" أو "Authentication failed"

**الأسباب المحتملة:**
1. Connection String خاطئ
2. IP غير مسموح
3. Username/Password خاطئ

**الحلول:**

#### الحل 1: التحقق من Network Access
1. اذهب إلى MongoDB Atlas
2. Network Access (في القائمة الجانبية)
3. تأكد من وجود: `0.0.0.0/0` (Allow access from anywhere)
4. إذا لم يكن موجوداً:
   - Add IP Address
   - اختر "Allow Access from Anywhere"
   - Confirm

#### الحل 2: التحقق من Connection String
Format الصحيح:
\`\`\`
mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
\`\`\`

**تأكد من:**
- استبدال `username` بالـ username الحقيقي
- استبدال `password` بالـ password الحقيقي (بدون <>)
- استبدال `cluster` باسم cluster الخاص بك
- استبدال `database` باسم قاعدة البيانات (مثل: ecommerce)

#### الحل 3: إنشاء Database User جديد
1. MongoDB Atlas → Database Access
2. Add New Database User
3. اختر Password Authentication
4. أدخل username و password بسيطين (بدون رموز خاصة)
5. Built-in Role: Atlas Admin
6. Add User
7. حدّث `DATABASE_URL` في Render

---

### ❌ المشكلة: Database Connection Timeout

**الأعراض:**
- Backend يستغرق وقتاً طويلاً ثم يفشل
- "Connection timeout"

**الحلول:**

1. تأكد من أن Cluster يعمل (في MongoDB Atlas)
2. جرب Region مختلف للـ Cluster
3. تأكد من Connection String صحيح

---

## 🚨 مشاكل CORS

### ❌ المشكلة: CORS Policy Error

**الأعراض:**
- في Console: "Access to fetch has been blocked by CORS policy"
- API calls تفشل مع CORS error

**الأسباب:**
- `CORS_ORIGIN` في Backend لا يطابق رابط Frontend

**الحلول:**

#### الحل 1: تحديث CORS_ORIGIN
1. Render Dashboard → Backend Service
2. Environment → CORS_ORIGIN
3. غيّر القيمة إلى رابط Frontend الكامل:
   \`\`\`
   https://your-app.vercel.app
   \`\`\`
4. **مهم:** بدون `/` في النهاية
5. Save Changes
6. انتظر إعادة التشغيل

#### الحل 2: استخدام Wildcard مؤقتاً (للاختبار فقط)
\`\`\`
CORS_ORIGIN=*
\`\`\`

**تحذير:** لا تستخدم هذا في الإنتاج!

---

## 🚨 مشاكل Git & GitHub

### ❌ المشكلة: Permission Denied

**الحل:**
\`\`\`bash
# استخدم HTTPS بدلاً من SSH
git remote set-url origin https://github.com/username/repo.git
\`\`\`

### ❌ المشكلة: Merge Conflict

**الحل:**
\`\`\`bash
git pull origin main
# حل الـ conflicts يدوياً
git add .
git commit -m "Resolve conflicts"
git push origin main
\`\`\`

---

## 🚨 مشاكل عامة

### ❌ المشكلة: الصور لا تظهر

**الأسباب:**
1. مسار الصور خاطئ
2. Backend لا يخدم الصور بشكل صحيح

**الحل:**
تأكد من أن Backend يحتوي على:
\`\`\`typescript
app.use("/images", express.static("src/imagesProducts"))
\`\`\`

ومسار الصور في Frontend:
\`\`\`typescript
\${BASE_URL}/images/product-name.png
\`\`\`

---

### ❌ المشكلة: JWT Token Invalid

**الأعراض:**
- تسجيل الدخول لا يعمل
- "Invalid token" أو "Token expired"

**الحلول:**

1. تأكد من أن `JWT_SECRET` موجود في Render
2. تأكد من أن `JWT_SECRET` لم يتغير
3. امسح localStorage في المتصفح:
   \`\`\`javascript
   // في Console
   localStorage.clear()
   \`\`\`
4. سجل دخول مرة أخرى

---

## 📊 أدوات التشخيص

### فحص Network Requests

1. افتح Frontend في المتصفح
2. اضغط F12
3. اذهب إلى Network Tab
4. Reload الصفحة
5. انظر إلى الطلبات:
   - ✅ Status 200: ناجح
   - ❌ Status 404: الـ endpoint غير موجود
   - ❌ Status 500: خطأ في Backend
   - ❌ Status 0 أو Failed: CORS أو Backend متوقف

### فحص Console Errors

1. F12 → Console
2. ابحث عن رسائل حمراء
3. اقرأ الرسالة بالكامل
4. Google الخطأ إذا لم تفهمه

### فحص Backend Logs

1. Render Dashboard → Service → Logs
2. اقرأ آخر 50 سطر
3. ابحث عن "Error" أو "Failed"

---

## 💡 نصائح للتشخيص

1. **ابدأ من الأساس**: تأكد أن Backend يعمل أولاً
2. **اختبر خطوة بخطوة**: لا تختبر كل شيء مرة واحدة
3. **اقرأ الأخطاء**: كل رسالة خطأ تعطيك معلومات
4. **استخدم Logs**: Render و Vercel لديهم logs مفصلة
5. **جرب محلياً**: إذا عمل محلياً، المشكلة في الإعدادات

---

## 📞 لا زالت المشكلة موجودة؟

إذا جربت كل شيء ولم تحل المشكلة:

1. **اقرأ الـ Logs بعناية**
2. **Google رسالة الخطأ بالكامل**
3. **تحقق من GitHub Issues** للمكتبات المستخدمة
4. **راجع التوثيق الرسمي**:
   - [Render Docs](https://render.com/docs)
   - [Vercel Docs](https://vercel.com/docs)
   - [MongoDB Docs](https://docs.mongodb.com)

---

## ✅ Checklist السريع

عند حدوث أي مشكلة، تحقق من:

- [ ] Backend يعمل على Render (حالة Live)
- [ ] MongoDB متصل (لا توجد أخطاء في Logs)
- [ ] `VITE_API_URL` صحيح في Vercel
- [ ] `CORS_ORIGIN` صحيح في Render
- [ ] Environment Variables موجودة في كلا المنصتين
- [ ] Build Commands صحيحة
- [ ] Output Directory صحيح
- [ ] لا توجد أخطاء في Console (F12)
- [ ] Network requests تنجح (F12 → Network)

---

**حظ سعيد! 🍀**

