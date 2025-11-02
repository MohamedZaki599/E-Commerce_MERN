# 📋 الأوامر الجاهزة - انسخ والصق

هذا الملف يحتوي على جميع الأوامر والإعدادات الجاهزة للنسخ واللصق مباشرة.

---

## 🚀 رفع الكود على GitHub

\`\`\`bash
git add .
git commit -m "Ready for deployment with Vercel and Render"
git push origin main
\`\`\`

---

## 🖥️ إعدادات Render (Backend)

### Root Directory
\`\`\`
backend
\`\`\`

### Build Command
\`\`\`bash
npm install
\`\`\`

### Start Command
\`\`\`bash
npm start
\`\`\`

### Environment Variables

**DATABASE_URL**
\`\`\`
mongodb+srv://username:password@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority
\`\`\`
*(استبدل username و password و cluster بالقيم الحقيقية)*

**JWT_SECRET**
\`\`\`
your-super-secret-jwt-key-here-change-this-12345
\`\`\`
*(غيّر هذا المفتاح إلى شيء عشوائي وقوي)*

**PORT**
\`\`\`
3001
\`\`\`

**CORS_ORIGIN** (في البداية)
\`\`\`
*
\`\`\`

**CORS_ORIGIN** (بعد رفع Frontend)
\`\`\`
https://your-app.vercel.app
\`\`\`
*(استبدل برابط Frontend الحقيقي)*

---

## 🎨 إعدادات Vercel (Frontend)

### Framework Preset
\`\`\`
Vite
\`\`\`

### Root Directory
\`\`\`
./
\`\`\`
*(أو اتركه فارغاً)*

### Build Command
\`\`\`bash
cd frontend && npm install && npm run build
\`\`\`

### Output Directory
\`\`\`
frontend/dist
\`\`\`

### Install Command
\`\`\`bash
cd frontend && npm install
\`\`\`

### Environment Variable

**Name:**
\`\`\`
VITE_API_URL
\`\`\`

**Value:**
\`\`\`
https://your-backend.onrender.com
\`\`\`
*(استبدل برابط Backend الحقيقي من Render)*

---

## 🗄️ إعداد MongoDB Atlas

### 1. السماح بجميع الـ IPs

في Network Access → Add IP Address:
\`\`\`
0.0.0.0/0
\`\`\`

### 2. Connection String Format
\`\`\`
mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
\`\`\`

**مثال:**
\`\`\`
mongodb+srv://myuser:mypassword123@cluster0.abc123.mongodb.net/ecommerce?retryWrites=true&w=majority
\`\`\`

---

## 🧪 أوامر الاختبار

### اختبار Backend محلياً
\`\`\`bash
cd backend
npm install
npm run dev
\`\`\`

### اختبار Frontend محلياً
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`

### اختبار Backend على الإنترنت
افتح في المتصفح:
\`\`\`
https://your-backend.onrender.com/products
\`\`\`

### اختبار Frontend على الإنترنت
افتح في المتصفح:
\`\`\`
https://your-app.vercel.app
\`\`\`

---

## 🔧 أوامر Git المفيدة

### التحقق من الحالة
\`\`\`bash
git status
\`\`\`

### إضافة جميع الملفات
\`\`\`bash
git add .
\`\`\`

### Commit مع رسالة
\`\`\`bash
git commit -m "Your message here"
\`\`\`

### Push إلى GitHub
\`\`\`bash
git push origin main
\`\`\`

### التحقق من الـ Remote
\`\`\`bash
git remote -v
\`\`\`

### إنشاء مستودع جديد على GitHub
\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repo-name.git
git push -u origin main
\`\`\`

---

## 📝 ملفات .env للتطوير المحلي

### Backend (.env)
\`\`\`env
DATABASE_URL=mongodb://localhost:27017/ecommerce
JWT_SECRET=your-local-secret-key
PORT=3001
CORS_ORIGIN=http://localhost:5173
\`\`\`

### Frontend (.env)
\`\`\`env
VITE_API_URL=http://localhost:3001
\`\`\`

---

## 🐛 أوامر التشخيص

### فحص منافذ الاتصال المفتوحة (Windows)
\`\`\`bash
netstat -ano | findstr :3001
\`\`\`

### فحص منافذ الاتصال المفتوحة (Mac/Linux)
\`\`\`bash
lsof -i :3001
\`\`\`

### إيقاف عملية على منفذ معين (Windows)
\`\`\`bash
taskkill /PID <PID_NUMBER> /F
\`\`\`

### إيقاف عملية على منفذ معين (Mac/Linux)
\`\`\`bash
kill -9 <PID_NUMBER>
\`\`\`

### مسح cache npm
\`\`\`bash
npm cache clean --force
\`\`\`

### إعادة تثبيت الحزم
\`\`\`bash
rm -rf node_modules package-lock.json
npm install
\`\`\`

---

## 🔗 روابط مفيدة

### المنصات
- **Render Dashboard**: https://dashboard.render.com
- **Vercel Dashboard**: https://vercel.com/dashboard
- **MongoDB Atlas**: https://cloud.mongodb.com
- **GitHub**: https://github.com

### توثيق
- **Render Docs**: https://render.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **MongoDB Docs**: https://docs.mongodb.com
- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev

---

## 💡 نصائح سريعة

### توليد JWT Secret عشوائي (Node.js)
\`\`\`bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
\`\`\`

### توليد JWT Secret عشوائي (Online)
افتح: https://www.uuidgenerator.net/

### اختبار API باستخدام curl
\`\`\`bash
curl https://your-backend.onrender.com/products
\`\`\`

### اختبار API باستخدام PowerShell (Windows)
\`\`\`powershell
Invoke-WebRequest -Uri "https://your-backend.onrender.com/products"
\`\`\`

---

## 🎯 ترتيب التنفيذ السريع

\`\`\`bash
# 1. رفع على GitHub
git add .
git commit -m "Ready for deployment"
git push origin main

# 2. رفع Backend على Render
# (استخدم الواجهة - انظر الإعدادات أعلاه)

# 3. رفع Frontend على Vercel
# (استخدم الواجهة - انظر الإعدادات أعلاه)

# 4. تحديث CORS في Render
# (من الواجهة - Environment Variables)

# 5. اختبار
# افتح رابط Frontend في المتصفح
\`\`\`

---

## ✅ تم!

الآن لديك جميع الأوامر والإعدادات جاهزة للنسخ واللصق! 🚀

