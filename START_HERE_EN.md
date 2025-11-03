# 🚀 How to Deploy Your Project Online?

## 📌 The Problem You Had

When you deployed project to Vercel directly, you got **404 NOT_FOUND** error because:
- Project contains Frontend and Backend in same repository (Monorepo)
- Vercel didn't know which folder to build
- There were no correct build settings

## ✅ The Solution

Problem is completely fixed! Now project is ready for deployment.

---

## 🎯 What Was Modified?

### 1️⃣ `vercel.json` file in root directory
- Tells Vercel to build only `frontend` folder
- Specifies output folder `frontend/dist`
- Configures redirects for React Router

### 2️⃣ `frontend/src/constants/baseURL.ts` file
- Updated to use `VITE_API_URL` environment variable
- Works both locally and online

### 3️⃣ `backend/src/index.ts` file
- Added support for `PORT` environment variable
- Improved CORS settings for production

### 4️⃣ `backend/package.json` file
- Added `start` script for production
- Added `build` script

### 5️⃣ Comprehensive documentation files
- `QUICK_START.md` - Quick 10-minute guide
- `RENDER_SETUP.md` - Backend deployment steps
- `VERCEL_SETUP.md` - Frontend deployment steps
- `DEPLOYMENT.md` - Complete guide
- `README.md` - Project information
- `.gitignore` - To protect sensitive files

---

## 🚀 Next Steps (Follow in Order)

### Step 1: Push Code to GitHub

```bash
git add .
git commit -m "Ready for deployment with Vercel and Render"
git push origin main
```

### Step 2: Deploy Backend to Render

Follow instructions in: **[RENDER_SETUP_EN.md](./RENDER_SETUP_EN.md)**

Quick summary:
1. Go to [render.com](https://render.com)
2. New + → Web Service
3. Select repository
4. Root Directory: `backend`
5. Build Command: `npm install`
6. Start Command: `npm start`
7. Add Environment Variables (DATABASE_URL, JWT_SECRET, etc)
8. Save Backend URL

### Step 3: Deploy Frontend to Vercel

Follow instructions in: **[VERCEL_SETUP_EN.md](./VERCEL_SETUP_EN.md)**

Quick summary:
1. Go to [vercel.com](https://vercel.com)
2. Add New → Project
3. Select repository
4. Framework: Vite
5. Build Command: `cd frontend && npm install && npm run build`
6. Output Directory: `frontend/dist`
7. Install Command: `cd frontend && npm install`
8. Add Environment Variable: `VITE_API_URL=https://your-backend.onrender.com`
9. Deploy

### Step 4: Connect Frontend & Backend

1. After deploying Frontend, get URL from Vercel
2. Go back to Render
3. Update `CORS_ORIGIN` with Frontend URL
4. Save changes

---

## 📚 Important Files

| File | Description |
|------|-------------|
| [QUICK_START_EN.md](./QUICK_START_EN.md) | Quick 10-minute guide ⚡ |
| [RENDER_SETUP_EN.md](./RENDER_SETUP_EN.md) | Detailed Backend deployment 🖥️ |
| [VERCEL_SETUP_EN.md](./VERCEL_SETUP_EN.md) | Detailed Frontend deployment 🎨 |
| [DEPLOYMENT_EN.md](./DEPLOYMENT_EN.md) | Complete deployment guide 📦 |
| [README.md](./README.md) | Project information 📖 |

---

## 🎯 Choose What Suits You

### 🏃 Short on time?
Read: **[QUICK_START_EN.md](./QUICK_START_EN.md)** (10 minutes)

### 📖 Want more details?
Read: **[RENDER_SETUP_EN.md](./RENDER_SETUP_EN.md)** and **[VERCEL_SETUP_EN.md](./VERCEL_SETUP_EN.md)**

### 🎓 Want to understand everything?
Read: **[DEPLOYMENT_EN.md](./DEPLOYMENT_EN.md)**

---

## ⚠️ Important Notes

1. **Backend First**: Must deploy Backend before Frontend
2. **MongoDB**: Make sure to setup MongoDB Atlas
3. **Environment Variables**: Don't forget to add them in Render and Vercel
4. **CORS**: Must update `CORS_ORIGIN` after deploying Frontend

---

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| 404 on Vercel | Ensure `Output Directory: frontend/dist` |
| API Not Responding | Check `VITE_API_URL` in Vercel |
| CORS Error | Update `CORS_ORIGIN` in Render |
| MongoDB Error | Allow IP: 0.0.0.0/0 in MongoDB Atlas |

---

## 💡 Final Tip

- Follow steps in order
- Don't skip any step
- Read error messages in Logs
- Use Developer Tools (F12) for diagnosis

---

## 🎉 Good Luck!

If you follow steps correctly, your project will be online in less than 10 minutes! 🚀

**Useful Links:**
- 🌐 Render: [dashboard.render.com](https://dashboard.render.com)
- ▲ Vercel: [vercel.com/dashboard](https://vercel.com/dashboard)
- 🍃 MongoDB: [cloud.mongodb.com](https://cloud.mongodb.com)

