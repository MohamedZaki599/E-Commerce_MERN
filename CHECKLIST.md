# ✅ قائمة التحقق - نشر المشروع

استخدم هذه القائمة للتأكد من إكمال جميع الخطوات بشكل صحيح.

---

## 📋 قبل البدء

- [ ] لديك حساب GitHub
- [ ] المشروع موجود على GitHub
- [ ] لديك اتصال بالإنترنت مستقر

---

## 🗄️ إعداد MongoDB Atlas

- [ ] إنشاء حساب على [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [ ] إنشاء Cluster مجاني
- [ ] إنشاء Database User (احفظ username و password)
- [ ] السماح بالاتصالات من أي IP (0.0.0.0/0)
- [ ] الحصول على Connection String
- [ ] استبدال `<password>` في Connection String

---

## 🖥️ رفع Backend على Render

- [ ] التسجيل في [Render.com](https://render.com)
- [ ] ربط حساب GitHub مع Render
- [ ] إنشاء Web Service جديد
- [ ] اختيار المستودع الصحيح
- [ ] تعيين Root Directory إلى `backend`
- [ ] تعيين Build Command: `npm install`
- [ ] تعيين Start Command: `npm start`
- [ ] إضافة Environment Variables:
  - [ ] `DATABASE_URL` (من MongoDB Atlas)
  - [ ] `JWT_SECRET` (مفتاح سري قوي)
  - [ ] `PORT` (3001)
  - [ ] `CORS_ORIGIN` (*) - سنحدثه لاحقاً
- [ ] الضغط على "Create Web Service"
- [ ] انتظار اكتمال البناء (Live باللون الأخضر)
- [ ] حفظ رابط Backend: `https://______.onrender.com`
- [ ] اختبار Backend: فتح `/products` في المتصفح

---

## 🎨 رفع Frontend على Vercel

- [ ] التسجيل في [Vercel.com](https://vercel.com)
- [ ] ربط حساب GitHub مع Vercel
- [ ] إضافة مشروع جديد (Add New → Project)
- [ ] اختيار المستودع الصحيح
- [ ] تعيين Framework Preset: `Vite`
- [ ] تعيين Build Command: `cd frontend && npm install && npm run build`
- [ ] تعيين Output Directory: `frontend/dist`
- [ ] تعيين Install Command: `cd frontend && npm install`
- [ ] إضافة Environment Variable:
  - [ ] `VITE_API_URL` = رابط Backend من Render
- [ ] الضغط على "Deploy"
- [ ] انتظار اكتمال البناء
- [ ] حفظ رابط Frontend: `https://______.vercel.app`

---

## 🔗 ربط Frontend و Backend

- [ ] الرجوع إلى Render Dashboard
- [ ] فتح Backend Service
- [ ] الذهاب إلى Environment
- [ ] تحديث `CORS_ORIGIN` برابط Frontend من Vercel
- [ ] حفظ التغييرات (سيتم إعادة التشغيل تلقائياً)

---

## 🧪 اختبار المشروع

- [ ] فتح رابط Frontend في المتصفح
- [ ] تجربة إنشاء حساب جديد
- [ ] تجربة تسجيل الدخول
- [ ] تصفح المنتجات
- [ ] إضافة منتج إلى السلة
- [ ] تعديل الكمية في السلة
- [ ] إتمام عملية الشراء
- [ ] عرض الطلبات السابقة
- [ ] تسجيل الخروج
- [ ] التحقق من عمل الصور بشكل صحيح

---

## 🐛 حل المشاكل (إذا حدثت)

### إذا ظهر خطأ 404 في Vercel:
- [ ] التحقق من Output Directory: يجب أن يكون `frontend/dist`
- [ ] التحقق من Build Command
- [ ] فتح Deployment Logs في Vercel

### إذا لم يستجب API:
- [ ] التحقق من `VITE_API_URL` في Vercel
- [ ] التحقق من أن Backend يعمل على Render (Live)
- [ ] فتح Developer Tools (F12) والتحقق من Console
- [ ] فتح Network Tab والتحقق من الطلبات

### إذا ظهر CORS Error:
- [ ] التحقق من `CORS_ORIGIN` في Render
- [ ] التأكد من عدم وجود `/` في نهاية الرابط
- [ ] إعادة تشغيل Backend Service في Render

### إذا لم يتصل بـ MongoDB:
- [ ] التحقق من Connection String في Render
- [ ] التأكد من السماح بـ IP: 0.0.0.0/0 في MongoDB Atlas
- [ ] التحقق من صحة username و password
- [ ] فتح Logs في Render للتحقق من رسالة الخطأ

---

## 📊 مراقبة الأداء

- [ ] فتح Render Dashboard ومراقبة Logs
- [ ] فتح Vercel Dashboard ومراقبة Analytics
- [ ] التحقق من استهلاك Bandwidth
- [ ] مراقبة استخدام MongoDB Atlas

---

## 🎯 خطوات إضافية (اختيارية)

- [ ] ربط دومين خاص بـ Vercel
- [ ] تفعيل Vercel Analytics
- [ ] إعداد GitHub Actions للـ CI/CD
- [ ] إضافة اختبارات تلقائية
- [ ] إعداد Monitoring و Alerts
- [ ] إضافة SSL Certificate (تلقائي في Vercel و Render)

---

## 📝 معلومات مهمة للحفظ

### Backend (Render)
- **URL**: `https://______.onrender.com`
- **Dashboard**: [dashboard.render.com](https://dashboard.render.com)

### Frontend (Vercel)
- **URL**: `https://______.vercel.app`
- **Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)

### Database (MongoDB)
- **Connection String**: `mongodb+srv://...`
- **Dashboard**: [cloud.mongodb.com](https://cloud.mongodb.com)

### Environment Variables (احفظها في مكان آمن!)
- `DATABASE_URL`: ________________
- `JWT_SECRET`: ________________
- `VITE_API_URL`: ________________
- `CORS_ORIGIN`: ________________

---

## 🎉 تم الانتهاء!

إذا أكملت جميع النقاط أعلاه، مبروك! 🎊

مشروعك الآن يعمل على الإنترنت ويمكن لأي شخص الوصول إليه! 🚀

---

## 📞 تحتاج مساعدة؟

راجع الملفات التالية:
- [ابدأ_من_هنا.md](./ابدأ_من_هنا.md) - نظرة عامة
- [QUICK_START.md](./QUICK_START.md) - دليل سريع
- [RENDER_SETUP.md](./RENDER_SETUP.md) - تفاصيل Backend
- [VERCEL_SETUP.md](./VERCEL_SETUP.md) - تفاصيل Frontend
- [DEPLOYMENT.md](./DEPLOYMENT.md) - دليل شامل

