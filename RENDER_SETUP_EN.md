# 🖥️ Render Backend Setup - Step by Step

## 📋 Overview

Render.com is a free platform for deploying Backend. We'll use it to deploy our Node.js API.

---

## 🚀 Steps

### 1️⃣ Create Render Account

1. Go to [render.com](https://render.com)
2. Click "Get Started"
3. Sign in using GitHub
4. Grant Render access to repositories

### 2️⃣ Create New Web Service

1. From Dashboard, click "New +"
2. Select "Web Service"
3. Choose `e-ecommerce` repository from list
4. Click "Connect"

### 3️⃣ Service Settings

Fill in the following fields:

#### Name
```
e-ecommerce-backend
```
(or any name you prefer)

#### Region
```
Singapore (or closest to you)
```

#### Branch
```
main
```
(or master depending on your main branch name)

#### Root Directory
```
backend
```
**Very important!** This tells Render to look in backend folder only

#### Runtime
```
Node
```

#### Build Command
```bash
npm install
```

#### Start Command
```bash
npm start
```

#### Instance Type
```
Free
```

### 4️⃣ Environment Variables

Click "Advanced" then add the following variables:

#### DATABASE_URL
```
mongodb+srv://username:password@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority
```
(Replace with your connection string from MongoDB Atlas)

#### JWT_SECRET
```
your-super-secret-jwt-key-here-12345
```
(Choose a strong secret key)

#### PORT
```
3001
```

#### CORS_ORIGIN
```
*
```
(We'll update this later with Frontend URL from Vercel)

### 5️⃣ Deploy

1. Click "Create Web Service" (at bottom)
2. Wait 3-5 minutes for build to complete
3. You'll see "Live" message in green
4. **Save the URL!** It will look like:
   ```
   https://e-ecommerce-backend.onrender.com
   ```

---

## 🗄️ MongoDB Atlas Setup

If you don't have a MongoDB database:

### 1. Create Account
- Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- Sign up for free account

### 2. Create Cluster
- Choose "Free Shared Cluster"
- Choose Region close to you
- Click "Create Cluster"

### 3. Create Database User
- Go to "Database Access"
- Click "Add New Database User"
- Enter username and password
- Save them!

### 4. Allow Connections
- Go to "Network Access"
- Click "Add IP Address"
- Choose "Allow Access from Anywhere" (0.0.0.0/0)
- Click "Confirm"

### 5. Get Connection String
- Go back to "Database"
- Click "Connect"
- Choose "Connect your application"
- Copy Connection String
- Replace `<password>` with actual password

---

## 🔄 Update CORS After Frontend Deployment

After deploying Frontend on Vercel:

1. Go back to Render Dashboard
2. Open "e-ecommerce-backend"
3. Go to "Environment"
4. Find `CORS_ORIGIN`
5. Change value from `*` to:
   ```
   https://your-app.vercel.app
   ```
6. Click "Save Changes"
7. Server will restart automatically

---

## ✅ Test Backend

### Simple Test
Open in browser:
```
https://e-ecommerce-backend.onrender.com/products
```

You should see product list in JSON format

### Advanced Test (Postman)
1. Open Postman
2. Create GET request:
   ```
   https://e-ecommerce-backend.onrender.com/products
   ```
3. You should get 200 OK response

---

## 🐛 Troubleshooting

### Issue: Build Failed

**Cause:** Installation or code error

**Solution:**
- Open "Logs" in Render
- Read error message
- Make sure `Root Directory` is `backend`
- Make sure `package.json` exists in backend folder

### Issue: Application Error / Crashed

**Cause:** Code error or missing environment variables

**Solution:**
- Open "Logs" and search for error
- Make sure `DATABASE_URL` is correct
- Make sure MongoDB allows connections from any IP

### Issue: Can't connect to MongoDB

**Cause:** MongoDB doesn't allow connection

**Solution:**
- Go to MongoDB Atlas
- Network Access → Add IP Address → 0.0.0.0/0
- Make sure username and password are correct in Connection String

### Issue: Service Sleeping

**Cause:** Free tier in Render stops after 15 minutes of inactivity

**Solution:**
- This is normal for free version
- First request will take 30 seconds to start server
- After that it works normally
- For permanent solution: Upgrade to Paid plan

---

## 📊 Monitor Service

In Render Dashboard you can:
- ✅ View Logs in real-time
- ✅ Monitor CPU and Memory usage
- ✅ See number of requests
- ✅ Manually restart service

---

## 🔄 Automatic Updates

- Every push to GitHub will trigger automatic redeployment
- You can disable Auto-Deploy from settings
- You can do Manual Deploy anytime

---

## 💡 Important Tips

1. **Logs**: Always open Logs when issues occur
2. **Environment Variables**: Don't share them with anyone
3. **Backups**: Keep copy of environment variables in safe place
4. **MongoDB**: Use MongoDB Atlas (free and stable)
5. **Cold Start**: First request may take 30 seconds (normal in Free tier)

---

## 🎯 Next Step

Now that Backend is deployed, go to [VERCEL_SETUP_EN.md](./VERCEL_SETUP_EN.md) to deploy Frontend!

---

**Done! 🎉**

Backend is now live on the internet!

