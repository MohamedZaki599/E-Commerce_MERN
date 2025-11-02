# دليل نشر المشروع على الإنترنت

## 📦 نظرة عامة
هذا المشروع يتكون من جزئين:
- **Frontend**: React + Vite (سيتم رفعه على Vercel)
- **Backend**: Node.js + Express (سيتم رفعه على Render أو Railway)

---

## 🚀 الجزء الأول: رفع Backend

### الخيار 1: استخدام Render.com (موصى به)

1. **إنشاء حساب**
   - اذهب إلى [render.com](https://render.com)
   - سجل دخول باستخدام GitHub

2. **إنشاء Web Service جديد**
   - اضغط على "New +" ثم اختر "Web Service"
   - اختر المستودع الخاص بك من GitHub
   - قم بتكوين الإعدادات التالية:

   ```
   Name: e-ecommerce-backend (أو أي اسم تريده)
   Region: اختر الأقرب لك
   Branch: main (أو master)
   Root Directory: backend
   Runtime: Node
   Build Command: npm install
   Start Command: npm start
   ```

3. **إضافة متغيرات البيئة**
   - اضغط على "Environment" في القائمة الجانبية
   - أضف المتغيرات التالية:
   
   ```
   DATABASE_URL=mongodb+srv://your-connection-string
   JWT_SECRET=your-secret-key-here
   PORT=3001
   CORS_ORIGIN=https://your-frontend-url.vercel.app
   ```

4. **Deploy**
   - اضغط على "Create Web Service"
   - انتظر حتى ينتهي البناء
   - احفظ الرابط الذي سيظهر (مثل: `https://e-ecommerce-backend.onrender.com`)

---

## 🎨 الجزء الثاني: رفع Frontend على Vercel

### الطريقة الأولى: من واجهة Vercel (موصى بها)

1. **استيراد المشروع**
   - اذهب إلى [vercel.com](https://vercel.com)
   - اضغط على "Add New..." ثم "Project"
   - اختر المستودع من GitHub

2. **تكوين إعدادات البناء**
   
   في صفحة "Configure Project"، قم بالتالي:
   
   ```
   Framework Preset: Vite
   Root Directory: ./  (اتركه كما هو)
   Build Command: cd frontend && npm install && npm run build
   Output Directory: frontend/dist
   Install Command: cd frontend && npm install
   ```

3. **إضافة متغيرات البيئة**
   
   في قسم "Environment Variables"، أضف:
   
   ```
   VITE_API_URL=https://e-ecommerce-backend.onrender.com
   ```
   
   (استبدل الرابط برابط Backend الذي حصلت عليه من Render)

4. **Deploy**
   - اضغط على "Deploy"
   - انتظر حتى ينتهي البناء
   - افتح الرابط الذي سيظهر

### الطريقة الثانية: استخدام ملف vercel.json

إذا كان لديك ملف `vercel.json` في المجلد الرئيسي، فإن Vercel سيستخدمه تلقائياً.

---

## 🔧 تحديث CORS_ORIGIN في Backend

بعد نشر Frontend، احصل على الرابط النهائي (مثل: `https://your-app.vercel.app`)

ثم:
1. ارجع إلى Render Dashboard
2. اذهب إلى إعدادات Backend Service
3. حدّث متغير `CORS_ORIGIN` بالرابط الجديد
4. احفظ التغييرات (سيتم إعادة تشغيل السيرفر تلقائياً)

---

## ✅ التحقق من النشر

1. افتح رابط Frontend
2. جرب تسجيل الدخول أو إنشاء حساب
3. تأكد من أن البيانات تُحفظ بشكل صحيح
4. تحقق من أن الصور تظهر بشكل صحيح

---

## 🐛 حل المشاكل الشائعة

### مشكلة: CORS Error
**الحل**: تأكد من أن `CORS_ORIGIN` في Backend يحتوي على رابط Frontend الصحيح

### مشكلة: 404 Not Found
**الحل**: تأكد من أن `Output Directory` في Vercel هو `frontend/dist`

### مشكلة: API لا يستجيب
**الحل**: تحقق من أن `VITE_API_URL` في Vercel يحتوي على رابط Backend الصحيح

### مشكلة: الصور لا تظهر
**الحل**: تأكد من أن مجلد `imagesProducts` موجود في Backend وأن المسار صحيح

---

## 📝 ملاحظات مهمة

1. **MongoDB Atlas**: تأكد من أن قاعدة البيانات MongoDB Atlas تسمح بالاتصالات من أي IP (0.0.0.0/0) أو أضف IP الخاص بـ Render

2. **Environment Variables**: لا تشارك متغيرات البيئة الحقيقية في GitHub

3. **Free Tier Limitations**:
   - Render: يتوقف السيرفر بعد 15 دقيقة من عدم الاستخدام (يستغرق 30 ثانية للتشغيل مرة أخرى)
   - Vercel: 100GB Bandwidth شهرياً

4. **Auto Deploy**: كل مرة تقوم بـ push إلى GitHub، سيتم إعادة النشر تلقائياً

---

## 🎉 انتهى!

الآن مشروعك يعمل على الإنترنت! 🚀

