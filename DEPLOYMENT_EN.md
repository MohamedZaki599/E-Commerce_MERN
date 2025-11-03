# Deployment Guide - Publishing Your Project Online

## 📦 Overview
This project consists of two parts:
- **Frontend**: React + Vite (will be deployed to Vercel)
- **Backend**: Node.js + Express (will be deployed to Render or Railway)

---

## 🚀 Part 1: Deploy Backend

### Option 1: Using Render.com (Recommended)

1. **Create Account**
   - Go to [render.com](https://render.com)
   - Sign in using GitHub

2. **Create New Web Service**
   - Click "New +" then select "Web Service"
   - Choose your repository from GitHub
   - Configure the following settings:

   ```
   Name: e-ecommerce-backend (or any name you prefer)
   Region: Choose closest to you
   Branch: main (or master)
   Root Directory: backend
   Runtime: Node
   Build Command: npm install
   Start Command: npm start
   ```

3. **Add Environment Variables**
   - Click "Environment" in the sidebar
   - Add the following variables:
   
   ```
   DATABASE_URL=mongodb+srv://your-connection-string
   JWT_SECRET=your-secret-key-here
   PORT=3001
   CORS_ORIGIN=https://your-frontend-url.vercel.app
   ```

4. **Deploy**
   - Click "Create Web Service"
   - Wait for the build to complete
   - Save the URL that appears (e.g., `https://e-ecommerce-backend.onrender.com`)

---

## 🎨 Part 2: Deploy Frontend to Vercel

### Method 1: From Vercel Interface (Recommended)

1. **Import Project**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." then "Project"
   - Choose repository from GitHub

2. **Configure Build Settings**
   
   On "Configure Project" page:
   
   ```
   Framework Preset: Vite
   Root Directory: ./  (leave as is)
   Build Command: cd frontend && npm install && npm run build
   Output Directory: frontend/dist
   Install Command: cd frontend && npm install
   ```

3. **Add Environment Variables**
   
   In "Environment Variables" section, add:
   
   ```
   VITE_API_URL=https://e-ecommerce-backend.onrender.com
   ```
   
   (Replace with your Backend URL from Render)

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Open the URL that appears

### Method 2: Using vercel.json file

If you have a `vercel.json` file in the root directory, Vercel will use it automatically.

---

## 🔧 Update CORS_ORIGIN in Backend

After deploying Frontend, get the final URL (e.g., `https://your-app.vercel.app`)

Then:
1. Go back to Render Dashboard
2. Go to Backend Service settings
3. Update `CORS_ORIGIN` variable with the new URL
4. Save changes (server will restart automatically)

---

## ✅ Verify Deployment

1. Open Frontend URL
2. Try login or create account
3. Make sure data is saved correctly
4. Verify images display correctly

---

## 🐛 Common Issues

### Issue: CORS Error
**Solution**: Make sure `CORS_ORIGIN` in Backend contains correct Frontend URL

### Issue: 404 Not Found
**Solution**: Make sure `Output Directory` in Vercel is `frontend/dist`

### Issue: API Not Responding
**Solution**: Verify `VITE_API_URL` in Vercel contains correct Backend URL

### Issue: Images Not Showing
**Solution**: Make sure `imagesProducts` folder exists in Backend and path is correct

---

## 📝 Important Notes

1. **MongoDB Atlas**: Make sure MongoDB Atlas database allows connections from any IP (0.0.0.0/0) or add Render's IP

2. **Environment Variables**: Don't share real environment variables on GitHub

3. **Free Tier Limitations**:
   - Render: Server stops after 15 minutes of inactivity (takes 30 seconds to restart)
   - Vercel: 100GB Bandwidth per month

4. **Auto Deploy**: Every push to GitHub will trigger automatic redeployment

---

## 🎉 Done!

Your project is now live on the internet! 🚀

