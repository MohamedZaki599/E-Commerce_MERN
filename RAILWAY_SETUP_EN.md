# 🚂 Railway Backend Setup - Step by Step

## 📋 Overview

Railway.app is an excellent free platform for deploying Backend **without needing a credit card**.

---

## ✨ Features

- ✅ **100% Free** without credit card
- ✅ **$5 free credit** monthly
- ✅ **No sleep** (no cold start)
- ✅ **Very easy** to use
- ✅ **Direct MongoDB support**

---

## 🚀 Steps

### 1️⃣ Create Railway Account

1. Go to [railway.app](https://railway.app)
2. Click "Start a New Project"
3. Choose "Login with GitHub"
4. Grant Railway permissions

---

### 2️⃣ Create New Project

1. From Dashboard, click **"New Project"**
2. Choose **"Deploy from GitHub repo"**
3. List of your repositories will appear
4. Search for `e-ecommerce`
5. Click on repository

---

### 3️⃣ Project Settings

**After selecting repository:**

1. Railway will auto-detect Node.js project
2. Click on created **Service**
3. Go to **Settings**

---

### 4️⃣ Configure Root Directory

**Very important!**

1. In Settings → **Root Directory**
2. Change from `/` to:
   ```
   backend
   ```
3. Save changes

---

### 5️⃣ Configure Build & Start Commands

In Settings:

**Build Command:**
```bash
npm install
```

**Start Command:**
```bash
npm start
```

---

### 6️⃣ Add Environment Variables

1. Go to **Variables** tab
2. Click **"New Variable"**
3. Add following variables:

```
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority
```

```
JWT_SECRET=your-super-secret-jwt-key-here-12345
```

```
PORT=3001
```

```
CORS_ORIGIN=*
```

**Note:** We'll update `CORS_ORIGIN` later with Frontend URL

---

### 7️⃣ Deploy

1. After adding all settings, Railway will start automatically
2. Go to **Deployments** tab
3. Wait until you see ✅ "Success"

---

### 8️⃣ Get URL

1. Go to **Settings**
2. Scroll to **Networking** or **Domains**
3. Click **"Generate Domain"**
4. URL will appear like:
   ```
   https://e-ecommerce-backend-production.up.railway.app
   ```
5. **Save this URL!**

---

## ✅ Test Backend

Open in browser:
```
https://your-app.up.railway.app/products
```

You should see product list in JSON format ✅

---

## 🔄 Update CORS After Frontend Deployment

After deploying Frontend to Vercel:

1. Go back to Railway Dashboard
2. Open Project
3. Go to **Variables**
4. Find `CORS_ORIGIN`
5. Change from `*` to:
   ```
   https://your-app.vercel.app
   ```
6. Save (will restart automatically)

---

## 🐛 Troubleshooting

### Issue: Build Failed

**Solution:**
1. Make sure `Root Directory` is `backend`
2. Make sure `Start Command` is `npm start`
3. Open **Logs** and search for error

### Issue: Application Crashed

**Solution:**
1. Make sure all Environment Variables are added
2. Make sure `DATABASE_URL` is correct
3. Open **Logs** to see error

### Issue: Can't connect to MongoDB

**Solution:**
1. Make sure IP allowance: `0.0.0.0/0` in MongoDB Atlas
2. Make sure username and password are correct in Connection String

---

## 💡 Important Tips

1. **Real-time Logs:** Railway shows Logs directly
2. **Auto Deploy:** Every push to GitHub triggers new deployment
3. **Free Credit:** $5 monthly is enough for small projects
4. **No Stop:** Unlike Render, Railway doesn't stop server

---

## 📊 Monitor Usage

In Dashboard you can see:
- ✅ CPU and Memory usage
- ✅ Remaining credit
- ✅ Number of Deployments
- ✅ Real-time Logs

---

## 🎯 Next Step

Now that Backend is deployed on Railway, go to Vercel to deploy Frontend!

Use the URL you got from Railway in `VITE_API_URL` variable on Vercel.

---

## 🎉 Done!

Backend is now running on Railway for free without credit card! 🚀

---

## 🆚 Comparison with Render

| Feature | Railway | Render |
|---------|---------|--------|
| Free | ✅ Yes | ✅ Yes |
| Credit Card | ❌ Not Required | ✅ Required |
| Cold Start | ❌ None | ✅ Yes |
| Free Credit | $5/month | - |
| Ease of Use | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

**Result:** Railway is better for small and medium projects! 🏆

