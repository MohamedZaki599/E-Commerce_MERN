# 🚀 Vercel Setup - Step by Step

## ⚠️ Before Starting

Make sure you've deployed Backend to Render or Railway first!

---

## 📝 Steps

### 1️⃣ Push Project to GitHub

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2️⃣ Open Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in using GitHub
3. Click "Add New..." then "Project"

### 3️⃣ Select Project

- Choose `e-ecommerce` repository from list
- Click "Import"

### 4️⃣ Project Settings (Very Important!)

On "Configure Project" page, fill in:

#### Framework Preset
```
Vite
```

#### Root Directory
```
./
```
(leave as is or leave empty)

#### Build and Output Settings

Click "Override" and enter:

**Build Command:**
```bash
cd frontend && npm install && npm run build
```

**Output Directory:**
```
frontend/dist
```

**Install Command:**
```bash
cd frontend && npm install
```

### 5️⃣ Environment Variables

In "Environment Variables" section, add:

**Name:**
```
VITE_API_URL
```

**Value:**
```
https://your-backend-url.onrender.com
```

(Replace `your-backend-url.onrender.com` with actual Backend URL)

**Environment:**
- ✅ Production
- ✅ Preview
- ✅ Development

### 6️⃣ Deploy

- Click "Deploy" (at bottom)
- Wait 2-3 minutes
- 🎉 Congratulations! Project is now online

---

## 🔧 After Deployment

### Update CORS in Backend

1. Go to Render Dashboard
2. Open Backend Service
3. Go to "Environment"
4. Update `CORS_ORIGIN` with new URL from Vercel:
   ```
   https://your-app.vercel.app
   ```
5. Save changes

---

## ✅ Test Project

1. Open Vercel URL
2. Try creating new account
3. Try logging in
4. Add products to cart
5. Complete purchase

---

## 🐛 Troubleshooting

### Issue: 404 Error

**Cause:** Vercel can't find Frontend files

**Solution:**
- Make sure Build Command is: `cd frontend && npm install && npm run build`
- Make sure Output Directory is: `frontend/dist`

### Issue: API Error / Network Error

**Cause:** Frontend can't connect to Backend

**Solution:**
- Make sure `VITE_API_URL` in Vercel is correct
- Make sure Backend is running on Render
- Open Developer Tools (F12) and check Console

### Issue: CORS Error

**Cause:** Backend rejects requests from Frontend

**Solution:**
- Make sure you updated `CORS_ORIGIN` in Render with correct URL from Vercel
- Make sure there's no `/` at end of URL

---

## 🔄 Automatic Updates

Every push to GitHub:
- ✅ Vercel will rebuild and redeploy automatically
- ✅ You'll get preview URL for each branch
- ✅ You can rollback to any previous version

---

## 📊 Performance Monitoring

In Vercel Dashboard you can see:
- Number of visitors
- Loading speed
- Errors
- Bandwidth usage

---

## 💡 Tips

1. **Custom Domain**: You can connect custom domain from Vercel settings
2. **Analytics**: Enable Vercel Analytics to monitor performance
3. **Preview Deployments**: Each Pull Request gets preview URL
4. **Environment Variables**: You can change them anytime from Settings

---

## 📞 Need Help?

If you face any issues:
1. Check Vercel Deployment Logs
2. Check Render Logs for Backend
3. Open Developer Tools (F12) in browser
4. Check Network Tab

---

**Done! 🎉**

Your project is now online and accessible to anyone!

