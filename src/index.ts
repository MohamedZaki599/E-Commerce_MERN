import "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import userRoute from "./routes/userRoute.js"
import { seedInitialProducts } from "./services/productService.js"
import productRoute from "./routes/productRoute.js"
import cartRoute from "./routes/cartRoute.js"

const app = express()
const PORT = 3001

app.use(express.json())
app.use("/images", express.static("src/imagesProducts"))


mongoose
	.connect(process.env.DATABASE_URL || "")
	.then(() => console.log("Connected to Mongo"))
	.catch((error) => console.log("Error connecting to Mongo", error))

// Seed the products to the database

seedInitialProducts()

app.use("/user", userRoute)
app.use("/products", productRoute)
app.use("/cart", cartRoute)

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`)
})
