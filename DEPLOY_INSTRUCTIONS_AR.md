# خطوات رفع الباك اند وربطه بالفرونت اند

لقد قمت بتجهيز كود الباك اند ليكون جاهزاً للرفع (Deployment) بشكل صحيح. قمت بتعديل إعدادات `TypeScript` و `package.json` وإصلاح روابط الصور لتكون ديناميكية بدلاً من `localhost`.

إليك الخطوات التفصيلية لرفع المشروع بنجاح:

## أولاً: رفع التعديلات على GitHub
بما أنني قمت بتعديل الملفات محلياً، يجب عليك أولاً رفع هذه التعديلات إلى GitHub:
1. افتح التيرمينال.
2. اكتب الأوامر التالية:
   ```bash
   git add .
   git commit -m "Prepare backend for deployment"
   git push
   ```

## ثانياً: رفع الباك اند على منصة Render (الأفضل للباك اند)
أنصحك باستخدام منصة **Render** لأنها تدعم Node.js بشكل ممتاز ومجاني وسهل الإعداد.

1. اذهب إلى [Render.com](https://render.com) وقم بإنشاء حساب.
2. اضغط على **New +** واختر **Web Service**.
3. اختر **Build and deploy from a Git repository** واضغط Next.
4. اربط حساب GitHub واختر مستودع مشروعك (Repository).
5. في صفحة الإعدادات، املأ البيانات كالتالي:
   - **Name**: اختر اسماً للباك اند (مثلاً `ecommerce-backend`).
   - **Root Directory**: اكتب `backend` (مهم جداً لأن الباك اند داخل فولدر).
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
6. انزل للأسفل إلى قسم **Environment Variables** واضغط **Add Environment Variable** لإضافة المتغيرات التالية:
   - `DATABASE_URL`: رابط قاعدة البيانات الخاص بك (MongoDB Atlas URI).
   - `JWT_SECRET`: كلمة سر لتشفير التوكن (اكتب أي نص طويل ومعقد).
   - `CORS_ORIGIN`: رابط الفرونت اند المرفوع على Vercel (مثلاً `https://my-ecommerce.vercel.app`). **بدون / في النهاية**.
   - `BASE_URL`: رابط الباك اند الذي سيعطيه لك Render (سيكون شيئاً مثل `https://ecommerce-backend.onrender.com`).
     * *ملاحظة:* يمكنك ترك `BASE_URL` فارغاً في البداية، ثم بعد إنشاء الخدمة ونسخ الرابط، عد لتعديله.
7. اضغط **Create Web Service**.

## ثالثاً: ربط الفرونت اند بالباك اند
الآن بعد أن أصبح لديك رابط للباك اند (مثلاً `https://ecommerce-backend.onrender.com`)، يجب إخبار الفرونت اند بهذا الرابط.

1. اذهب إلى حسابك على **Vercel**.
2. اختر مشروع الفرونت اند.
3. اذهب إلى **Settings** ثم **Environment Variables**.
4. أضف متغيراً جديداً:
   - **Key**: `VITE_API_URL`
   - **Value**: رابط الباك اند الذي حصلت عليه من Render (مثلاً `https://ecommerce-backend.onrender.com`). **تأكد من عدم وجود / في النهاية**.
5. اذهب إلى تبويب **Deployments** وقم بإعادة نشر المشروع (Redeploy) أو قم بعمل Push جديد بسيط ليتم التحديث.

## ملخص التعديلات التي قمت بها:
1. **`backend/tsconfig.json`**: قمت بتفعيل خيار `outDir` ليتم بناء المشروع في مجلد `dist`، وهذا هو المعيار الصحيح للإنتاج.
2. **`backend/package.json`**: عدلت أمر `start` ليقوم بتشغيل الملفات المبنية (`dist/index.js`) بدلاً من تشغيل ملفات المصدر مباشرة، مما يحسن الأداء ويقلل الأخطاء.
3. **`backend/src/services/productService.ts`**: قمت بتغيير روابط الصور من `http://localhost:3001` الثابتة لتعتمد على متغير `BASE_URL`، لكي تظهر الصور بشكل صحيح عند الرفع.
4. **`backend/src/index.ts`**: أضفت `export default app` لزيادة التوافقية.

الآن، اتبع الخطوات أعلاه وسيعمل المشروع بالكامل إن شاء الله!
