import "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import userRoute from "./routes/userRoute.js"
import { seedInitialProducts } from "./services/productService.js"
import productRoute from "./routes/productRoute.js"
import cartRoute from "./routes/cartRoute.js"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 3001

// CORS
app.use(express.json())
app.use(
	cors({
		origin: process.env.CORS_ORIGIN || "*",
		credentials: true,
	})
)

app.use("/images", express.static("src/imagesProducts"))

// --------------------
//   FIXED MONGO CONNECTION
// --------------------

const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) {
	console.error("❌ MONGO_URI is missing. Make sure it's set in Render.")
	process.exit(1)
}

mongoose
	.connect(MONGO_URI)
	.then(() => console.log("✅ Connected to MongoDB Atlas"))
	.catch((error) => {
		console.error("❌ Error connecting to MongoDB:", error)
		process.exit(1)
	})

// Seed products (after DB connection)
seedInitialProducts()

// Routes
app.use("/user", userRoute)
app.use("/products", productRoute)
app.use("/cart", cartRoute)

// Server listen
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`)
})

export default app
