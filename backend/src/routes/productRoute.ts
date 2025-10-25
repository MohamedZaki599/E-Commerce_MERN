import express from "express"
import {
	getAllProducts,
	deleteAllProducts,
	updateProductImageUrls,
} from "../services/productService.js"

const router = express.Router()

router.get("/", async (req, res) => {
	const products = await getAllProducts()
	res.status(200).send(products)
})

// Delete all products (for development only)
router.delete("/delete-all", async (req, res) => {
	await deleteAllProducts()
	res.status(200).send({ message: "All products deleted" })
})

// Update product image URLs to full URLs
router.post("/update-image-urls", async (req, res) => {
	await updateProductImageUrls()
	res.status(200).send({ message: "Product image URLs updated" })
})

export default router
