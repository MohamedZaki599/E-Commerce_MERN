## E‑Ecommerce – Full‑Stack Demo Store

E‑Ecommerce is a full‑stack demo online store built with a **TypeScript/Express/MongoDB** backend and a **React + Vite + Material UI** frontend.  
It showcases a typical e‑commerce flow: browsing products, user registration and login with JWT authentication, managing a shopping cart, and placing orders.

---

## 1. Project Overview

**Goal**: Provide a simple but realistic e‑commerce experience suitable for learning, portfolio presentation, or as a starting point for a production app.

- **Frontend** (deployed on Vercel)
  - Built with **React 18**, **TypeScript**, **Vite**, and **React Router**.
  - Uses **Material UI (MUI)** for a modern, responsive UI.
  - Manages **authentication** and **cart state** via React Context providers.
  - Communicates with the backend via a configurable `BASE_URL` / `VITE_API_URL`.

- **Backend** (to be deployed on Render)
  - Built with **Node.js**, **TypeScript**, **Express 5**, and **MongoDB/Mongoose**.
  - Implements **JWT‑based authentication**, **cart management**, and **order checkout**.
  - Serves product data and static product images.
  - Designed to be consumed by any frontend client (SPA, mobile app, etc.).

---

## 2. Tech Stack

### 2.1 Frontend (Vite + React)

- **Core**
  - `React 18`
  - `TypeScript`
  - `Vite` (dev server & build tool)
  - `react-router-dom` for client‑side routing
- **UI**
  - `@mui/material`, `@mui/icons-material`
  - `@emotion/react`, `@emotion/styled` for styling with MUI
- **Project structure (main parts)**
  - `src/App.tsx`: Routing and layout shell with `BrowserRouter`, `Navbar`, and pages.
  - `src/pages/*`: Page components such as `HomePage`, `LoginPage`, `RegisterPage`, `CartPage`, `CheckoutPage`, `OrderSuccessPage`, `MyOrdersPage`.
  - `src/components/*`: Shared UI (e.g. `Navbar`, `ProductCard`, `ProtectedRoute`).
  - `src/context/Auth/*`: Authentication context and provider (`AuthContext`, `AuthProvider`).
  - `src/context/Cart/*`: Cart context and provider (`CartContext`, `CartProvider`).
  - `src/constants/baseURL.ts`: Exposes `BASE_URL`, reading from `import.meta.env.VITE_API_URL` with a fallback to `http://localhost:3001`.

### 2.2 Backend (Node + Express + MongoDB)

- **Core**
  - `Node.js` (ESM, TypeScript compiled with `tsc`)
  - `Express 5`
  - `Mongoose` / `mongodb` for data persistence
  - `dotenv` for environment variables
  - `cors` to control cross‑origin access
- **Auth & Security**
  - `jsonwebtoken` for JWT issuing and verification
  - `bcrypt` for password hashing
  - Custom middleware `validateJWT` to protect authenticated routes
- **Project structure (main parts)**
  - `src/index.ts`
    - Loads environment variables with `dotenv/config`.
    - Creates the Express app and enables JSON body parsing.
    - Configures CORS using `process.env.CORS_ORIGIN` (or `*` as a fallback).
    - Serves static product images from `src/imagesProducts` under `/images`.
    - Connects to MongoDB using `process.env.DATABASE_URL`.
    - Seeds initial products by calling `seedInitialProducts()`.
    - Mounts main route groups:
      - `/user` → `userRoute`
      - `/products` → `productRoute`
      - `/cart` → `cartRoute`
  - `src/models/*`: Mongoose models for users, products, carts, and orders.
  - `src/services/*`: Business logic for users, products, and carts (registration, login, product seeding, cart operations, checkout, etc.).
  - `src/routes/*`: Thin Express routers that call the services and shape HTTP responses.
  - `src/middlewares/validateJWT.ts`: Reads a Bearer token, verifies it, and attaches the user to the request.
  - `src/types/extendedRequest.ts`: Strongly‑typed request object with an attached `user` field.

---

## 3. Main Features

- **Authentication**
  - User registration with first name, last name, email, and password.
  - Secure password storage using `bcrypt` hashing.
  - Login returns a **JWT token** used by the frontend for authenticated requests.

- **Products**
  - Product list exposed via `/products`.
  - Server‑side seeding of initial demo products.
  - Product images served as static files from `/images/*`.

- **Cart & Orders**
  - Authenticated cart endpoints under `/cart` using `validateJWT`.
  - Add, update, remove, and clear cart items.
  - `POST /cart/checkout` to create an order from the current cart.
  - `GET /user/my-orders` to retrieve the authenticated user’s previous orders.

- **Frontend UX**
  - Public pages: home, register, login.
  - Protected pages (wrapped by `ProtectedRoute`): cart, checkout, order success, my orders.
  - Global navigation bar (`Navbar`) with links and auth/cart status.
  - State persisted in contexts and synchronized with backend APIs.

---

## 4. Running the Project Locally

### 4.1 Prerequisites

- **Node.js** (LTS recommended)
- **npm**
- A **MongoDB** instance (local or hosted, e.g. MongoDB Atlas)

### 4.2 Environment Variables

Create a `.env` file in the **backend** directory with at least:

- **`PORT`** – Port for the backend server (e.g. `3001`).
- **`DATABASE_URL`** – MongoDB connection string.
- **`JWT_SECRET`** – Secret key for signing JWT tokens.
- **`CORS_ORIGIN`** – Allowed frontend origin (e.g. `http://localhost:5173` for local dev, or your Vercel URL in production).

Create a `.env` file in the **frontend** directory with:

- **`VITE_API_URL`** – Base URL of the backend API (e.g. `http://localhost:3001` in development, or the Render backend URL in production).

### 4.3 Backend – Development

```bash
cd backend
npm install
npm run dev
```

The backend will start on `http://localhost:<PORT>` (default `3001`).

### 4.4 Frontend – Development

```bash
cd frontend
npm install
npm run dev
```

Vite will start the frontend (by default on something like `http://localhost:5173`).

Make sure `VITE_API_URL` in the frontend points to the backend URL (`http://localhost:3001` for local development).

---

## 5. API Overview (Backend)

> Note: Exact request/response shapes are defined in the service and model files, but this section summarizes the main routes.

### 5.1 Auth & User (`/user`)

- `POST /user/register`
  - Registers a new user.
  - Body: `{ firstName, lastName, email, password }`

- `POST /user/login`
  - Logs in and returns JWT.
  - Body: `{ email, password }`

- `GET /user/my-orders` (protected)
  - Requires `Authorization: Bearer <token>`.
  - Returns the authenticated user’s orders.

### 5.2 Products (`/products`)

- `GET /products`
  - Returns all products.

- `DELETE /products/delete-all` (development only)
  - Deletes all products (use with caution).

- `POST /products/update-image-urls` (development only)
  - Updates stored product image URLs to full URLs.

### 5.3 Cart (`/cart`)

All cart endpoints require a valid JWT via `Authorization: Bearer <token>`.

- `GET /cart`
  - Returns the current user’s active cart with populated product details.

- `DELETE /cart`
  - Clears the current user’s cart.

- `POST /cart/items`
  - Adds a product to the cart or increases its quantity.
  - Body: `{ productId, quantity }`

- `PUT /cart/items`
  - Updates the quantity of a cart item.
  - Body: `{ productId, quantity }`

- `DELETE /cart/items/:productId`
  - Removes a specific product from the cart.

- `POST /cart/checkout`
  - Creates an order from the current cart.
  - Body: `{ address }`

---

## 6. Deployment Guide

### 6.1 Deploying the Backend to Render

1. **Create a new Web Service**
   - Go to Render.
   - Create a new **Web Service** from your Git repository containing this project.
2. **Configure the service**
   - **Root directory**: `backend`
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
3. **Set environment variables** in Render
   - `PORT` – If using Render’s default, you can read `process.env.PORT` (already supported in `src/index.ts`).
   - `DATABASE_URL` – Your MongoDB URI.
   - `JWT_SECRET` – Secret for JWT tokens.
   - `CORS_ORIGIN` – Your frontend origin (e.g. `https://your-frontend.vercel.app`).
4. **Save & Deploy**
   - Trigger a deploy.
   - After deploy, note the **Render service URL**, e.g. `https://your-backend.onrender.com`.

### 6.2 Deploying the Frontend to Vercel

The repository already contains a **Vercel** configuration for the frontend:

- Top‑level `vercel.json` builds using:
  - `buildCommand`: `cd frontend && npm install && npm run build`
  - `outputDirectory`: `frontend/dist`

To ensure the frontend uses the Render backend:

1. On Vercel, go to your project **Settings → Environment Variables**.
2. Add:
   - `VITE_API_URL` = `https://your-backend.onrender.com` (the Render backend URL).
3. Redeploy the frontend.

The frontend’s `BASE_URL` constant reads `import.meta.env.VITE_API_URL`, so after redeploy all API calls will target the Render backend.

---

## 7. Connecting Frontend and Backend (Summary)

1. **Deploy backend to Render** and copy the public URL (e.g. `https://your-backend.onrender.com`).
2. **Set CORS** in the backend via `CORS_ORIGIN` so that it allows your Vercel frontend domain.
3. **On Vercel**, set `VITE_API_URL` to that Render backend URL.
4. **Redeploy** the frontend so that React uses the new API URL.
5. Test the flow:
   - Register a new user.
   - Log in (ensure JWT is received and stored).
   - Add products to cart, checkout, and verify that orders appear in “My Orders”.

---

## 8. Future Improvements

- Add product search, filters, and categories.
- Add pagination or infinite scroll for large product lists.
- Implement password reset and email verification.
- Add payment integration (Stripe, PayPal, etc.).
- Improve error handling and user‑facing feedback for failed API calls.
- Add unit/integration tests for critical services and components.


