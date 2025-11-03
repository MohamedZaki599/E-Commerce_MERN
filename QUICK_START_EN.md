# ⚡ Quick Start Guide - Deploy Project in 10 Minutes

## 📝 Summary

1. ✅ Deploy Backend to Render
2. ✅ Deploy Frontend to Vercel
3. ✅ Connect them together

---

## 🎯 Abbreviated Steps

### 1️⃣ Push Code to GitHub (1 minute)

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

---

### 2️⃣ Backend on Render (5 minutes)

1. **Go to:** [render.com](https://render.com)
2. **Sign in** with GitHub
3. **New + → Web Service**
4. **Select repository** `e-ecommerce`
5. **Fill in:**
   - Name: `e-ecommerce-backend`
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
6. **Add Environment Variables:**
   ```
   DATABASE_URL=mongodb+srv://...
   JWT_SECRET=your-secret-key
   PORT=3001
   CORS_ORIGIN=*
   ```
7. **Create Web Service**
8. **Save URL:** `https://your-backend.onrender.com`

---

### 3️⃣ Frontend on Vercel (3 minutes)

1. **Go to:** [vercel.com](https://vercel.com)
2. **Sign in** with GitHub
3. **Add New → Project**
4. **Select** `e-ecommerce`
5. **Fill in:**
   - Framework: `Vite`
   - Build Command: `cd frontend && npm install && npm run build`
   - Output Directory: `frontend/dist`
   - Install Command: `cd frontend && npm install`
6. **Add Environment Variable:**
   ```
   VITE_API_URL=https://your-backend.onrender.com
   ```
7. **Deploy**
8. **Save URL:** `https://your-app.vercel.app`

---

### 4️⃣ Update CORS (1 minute)

1. Go back to **Render**
2. Open **Backend Service**
3. **Environment → CORS_ORIGIN**
4. Change from `*` to: `https://your-app.vercel.app`
5. **Save Changes**

---

## ✅ Testing

Open `https://your-app.vercel.app` and try:
- ✅ Create account
- ✅ Login
- ✅ Add product to cart
- ✅ Complete purchase

---

## 🐛 Common Issues & Quick Solutions

| Issue | Solution |
|-------|----------|
| 404 on Vercel | Ensure Output Directory: `frontend/dist` |
| API Not Responding | Check `VITE_API_URL` in Vercel |
| CORS Error | Check `CORS_ORIGIN` in Render |
| MongoDB Error | Allow IP: 0.0.0.0/0 |

---

## 📚 For More Details

- **Backend:** [RENDER_SETUP_EN.md](./RENDER_SETUP_EN.md)
- **Frontend:** [VERCEL_SETUP_EN.md](./VERCEL_SETUP_EN.md)
- **Complete:** [DEPLOYMENT_EN.md](./DEPLOYMENT_EN.md)

---

## 🎉 Done!

Your project is now online! 🚀

**Useful Links:**
- Render Dashboard: [dashboard.render.com](https://dashboard.render.com)
- Vercel Dashboard: [vercel.com/dashboard](https://vercel.com/dashboard)
- MongoDB Atlas: [cloud.mongodb.com](https://cloud.mongodb.com)

