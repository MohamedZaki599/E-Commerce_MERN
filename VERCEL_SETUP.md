# 🚀 إعداد Vercel - خطوة بخطوة

## ⚠️ قبل البدء

تأكد من أنك قمت برفع Backend على Render أو Railway أولاً!

---

## 📝 الخطوات

### 1️⃣ ادفع المشروع إلى GitHub

\`\`\`bash
git add .
git commit -m "Ready for deployment"
git push origin main
\`\`\`

### 2️⃣ افتح Vercel

1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل دخول باستخدام GitHub
3. اضغط على "Add New..." ثم "Project"

### 3️⃣ اختر المشروع

- اختر المستودع `e-ecommerce` من القائمة
- اضغط على "Import"

### 4️⃣ إعدادات المشروع (مهم جداً!)

في صفحة "Configure Project"، املأ الحقول التالية:

#### Framework Preset
\`\`\`
Vite
\`\`\`

#### Root Directory
\`\`\`
./
\`\`\`
(اتركه كما هو أو اتركه فارغاً)

#### Build and Output Settings

انقر على "Override" وأدخل:

**Build Command:**
\`\`\`bash
cd frontend && npm install && npm run build
\`\`\`

**Output Directory:**
\`\`\`
frontend/dist
\`\`\`

**Install Command:**
\`\`\`bash
cd frontend && npm install
\`\`\`

### 5️⃣ متغيرات البيئة

في قسم "Environment Variables"، أضف:

**Name:**
\`\`\`
VITE_API_URL
\`\`\`

**Value:**
\`\`\`
https://your-backend-url.onrender.com
\`\`\`

(استبدل `your-backend-url.onrender.com` برابط Backend الحقيقي)

**Environment:**
- ✅ Production
- ✅ Preview
- ✅ Development

### 6️⃣ Deploy

- اضغط على "Deploy"
- انتظر 2-3 دقائق
- 🎉 مبروك! المشروع الآن على الإنترنت

---

## 🔧 بعد النشر

### تحديث CORS في Backend

1. اذهب إلى Render Dashboard
2. افتح Backend Service
3. اذهب إلى "Environment"
4. حدّث `CORS_ORIGIN` بالرابط الجديد من Vercel:
   \`\`\`
   https://your-app.vercel.app
   \`\`\`
5. احفظ التغييرات

---

## ✅ اختبار المشروع

1. افتح رابط Vercel
2. جرب إنشاء حساب جديد
3. جرب تسجيل الدخول
4. أضف منتجات إلى السلة
5. أكمل عملية الشراء

---

## 🐛 حل المشاكل

### المشكلة: 404 Error

**السبب:** Vercel لا يجد ملفات Frontend

**الحل:**
- تأكد من أن Build Command هو: `cd frontend && npm install && npm run build`
- تأكد من أن Output Directory هو: `frontend/dist`

### المشكلة: API Error / Network Error

**السبب:** Frontend لا يستطيع الاتصال بـ Backend

**الحل:**
- تأكد من أن `VITE_API_URL` في Vercel صحيح
- تأكد من أن Backend يعمل على Render
- افتح Developer Tools (F12) وتحقق من Console

### المشكلة: CORS Error

**السبب:** Backend يرفض الطلبات من Frontend

**الحل:**
- تأكد من تحديث `CORS_ORIGIN` في Render بالرابط الصحيح من Vercel
- تأكد من عدم وجود `/` في نهاية الرابط

---

## 🔄 التحديثات التلقائية

كل مرة تقوم بـ push إلى GitHub:
- ✅ Vercel سيعيد البناء والنشر تلقائياً
- ✅ ستحصل على رابط preview لكل branch
- ✅ يمكنك الرجوع إلى أي نسخة سابقة

---

## 📊 مراقبة الأداء

في Vercel Dashboard يمكنك رؤية:
- عدد الزوار
- سرعة التحميل
- الأخطاء
- استهلاك Bandwidth

---

## 💡 نصائح

1. **Custom Domain**: يمكنك ربط دومين خاص من إعدادات Vercel
2. **Analytics**: فعّل Vercel Analytics لمراقبة الأداء
3. **Preview Deployments**: كل Pull Request يحصل على رابط preview
4. **Environment Variables**: يمكنك تغييرها في أي وقت من Settings

---

## 📞 هل تحتاج مساعدة؟

إذا واجهت أي مشكلة:
1. تحقق من Vercel Deployment Logs
2. تحقق من Render Logs للـ Backend
3. افتح Developer Tools (F12) في المتصفح
4. تحقق من Network Tab

---

**تم! 🎉**

الآن مشروعك يعمل على الإنترنت ويمكن لأي شخص الوصول إليه!

