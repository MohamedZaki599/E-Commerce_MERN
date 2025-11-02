# 🛒 E-Commerce Platform

منصة تجارة إلكترونية متكاملة مبنية باستخدام React و Node.js

---

## 🚀 تريد نشر المشروع على الإنترنت؟

**ابدأ من هنا:** [START_HERE.md](./START_HERE.md) أو [ابدأ_من_هنا.md](./ابدأ_من_هنا.md)

**خيارات سريعة:**
- ⚡ [QUICK_START.md](./QUICK_START.md) - 10 دقائق
- 📖 [DEPLOYMENT.md](./DEPLOYMENT.md) - دليل شامل
- 📸 [VISUAL_GUIDE.md](./VISUAL_GUIDE.md) - خطوة بخطوة بالصور
- 🔍 [INDEX.md](./INDEX.md) - فهرس شامل لجميع الملفات

---

## 📋 المحتويات

- [نظرة عامة](#نظرة-عامة)
- [المميزات](#المميزات)
- [التقنيات المستخدمة](#التقنيات-المستخدمة)
- [التثبيت والتشغيل محلياً](#التثبيت-والتشغيل-محلياً)
- [نشر المشروع](#نشر-المشروع)

## 🎯 نظرة عامة

هذا المشروع عبارة عن منصة تجارة إلكترونية كاملة تتيح للمستخدمين:
- تصفح المنتجات
- إضافة المنتجات إلى السلة
- إتمام عمليات الشراء
- إدارة الطلبات

## ✨ المميزات

### للمستخدمين
- ✅ تسجيل دخول وإنشاء حساب جديد
- ✅ تصفح المنتجات مع الصور والأسعار
- ✅ إضافة المنتجات إلى السلة
- ✅ تعديل الكميات في السلة
- ✅ إتمام عملية الشراء
- ✅ عرض الطلبات السابقة

### التقنية
- 🔐 نظام مصادقة آمن باستخدام JWT
- 🔒 تشفير كلمات المرور باستخدام bcrypt
- 📱 تصميم متجاوب (Responsive)
- 🎨 واجهة مستخدم حديثة باستخدام Material-UI
- 🚀 أداء عالي مع React و Vite

## 🛠 التقنيات المستخدمة

### Frontend
- **React 18** - مكتبة بناء واجهات المستخدم
- **TypeScript** - للكتابة الآمنة
- **Vite** - أداة البناء السريعة
- **Material-UI** - مكتبة المكونات
- **React Router** - للتنقل بين الصفحات
- **Context API** - لإدارة الحالة

### Backend
- **Node.js** - بيئة تشغيل JavaScript
- **Express** - إطار عمل الويب
- **TypeScript** - للكتابة الآمنة
- **MongoDB** - قاعدة البيانات
- **Mongoose** - ODM لـ MongoDB
- **JWT** - للمصادقة
- **bcrypt** - لتشفير كلمات المرور

## 🚀 التثبيت والتشغيل محلياً

### المتطلبات
- Node.js (v18 أو أحدث)
- MongoDB (محلي أو Atlas)
- npm أو yarn

### 1. استنساخ المشروع

\`\`\`bash
git clone https://github.com/your-username/e-ecommerce.git
cd e-ecommerce
\`\`\`

### 2. إعداد Backend

\`\`\`bash
cd backend
npm install
\`\`\`

أنشئ ملف `.env` في مجلد `backend`:

\`\`\`env
DATABASE_URL=mongodb://localhost:27017/ecommerce
JWT_SECRET=your-secret-key-here
PORT=3001
CORS_ORIGIN=http://localhost:5173
\`\`\`

شغّل Backend:

\`\`\`bash
npm run dev
\`\`\`

### 3. إعداد Frontend

في نافذة terminal جديدة:

\`\`\`bash
cd frontend
npm install
\`\`\`

أنشئ ملف `.env` في مجلد `frontend`:

\`\`\`env
VITE_API_URL=http://localhost:3001
\`\`\`

شغّل Frontend:

\`\`\`bash
npm run dev
\`\`\`

### 4. افتح المتصفح

افتح [http://localhost:5173](http://localhost:5173)

## 🌐 نشر المشروع

لنشر المشروع على الإنترنت، اتبع التعليمات الموجودة في ملف [DEPLOYMENT.md](./DEPLOYMENT.md)

### ملخص سريع:
1. **Backend**: ارفعه على Render.com أو Railway.app
2. **Frontend**: ارفعه على Vercel
3. حدّث متغيرات البيئة في كلا المنصتين

## 📁 هيكل المشروع

\`\`\`
e-ecommerce/
├── backend/
│   ├── src/
│   │   ├── index.ts           # نقطة البداية
│   │   ├── models/            # نماذج قاعدة البيانات
│   │   ├── routes/            # مسارات API
│   │   ├── services/          # منطق الأعمال
│   │   ├── middlewares/       # Middleware functions
│   │   └── types/             # TypeScript types
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── components/        # مكونات React
│   │   ├── pages/             # صفحات التطبيق
│   │   ├── context/           # Context providers
│   │   ├── constants/         # الثوابت
│   │   └── types/             # TypeScript types
│   ├── package.json
│   └── vite.config.ts
│
├── vercel.json                # إعدادات Vercel
├── DEPLOYMENT.md              # دليل النشر
└── README.md                  # هذا الملف
\`\`\`

## 🔐 الأمان

- كلمات المرور مشفرة باستخدام bcrypt
- المصادقة تتم عبر JWT tokens
- CORS محمي ومحدد
- التحقق من صحة البيانات في Backend

## 📝 الترخيص

هذا المشروع مفتوح المصدر ومتاح للاستخدام الشخصي والتعليمي.

## 👨‍💻 المطور

تم تطويره بواسطة [اسمك]

## 🤝 المساهمة

المساهمات مرحب بها! يرجى فتح Issue أو Pull Request.

---

**ملاحظة**: هذا مشروع تعليمي. للاستخدام في الإنتاج، يُنصح بإضافة المزيد من ميزات الأمان والاختبارات.

