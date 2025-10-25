import { productModel } from "../models/productModel.js"

export const getAllProducts = async () => {
	return await productModel.find()
}

export const deleteAllProducts = async () => {
	try {
		await productModel.deleteMany({})
		console.log("All products deleted successfully")
	} catch (error) {
		console.log("Error deleting products", error)
	}
}

export const updateProductImageUrls = async () => {
	try {
		const products = await getAllProducts()
		for (const product of products) {
			if (!product.image.startsWith("http")) {
				product.image = `http://localhost:3001/${product.image}`
				await product.save()
			}
		}
		console.log("Product image URLs updated successfully")
	} catch (error) {
		console.log("Error updating product image URLs", error)
	}
}

export const seedInitialProducts = async () => {
	try {
		const products = [
			{
				title: "MSI Katana GF66",
				image: "http://localhost:3001/images/MSI Katana GF66.png",
				price: 1100,
				stock: 10,
			},
			{
				title: "MSI Creator M16",
				image: "http://localhost:3001/images/MSI Creator M16.png",
				price: 1800,
				stock: 20,
			},
			{
				title: "Lenovo IdeaPad 3",
				image: "http://localhost:3001/images/Lenovo IdeaPad 3.png",
				price: 600,
				stock: 30,
			},
			{
				title: "Lenovo Yoga 7i",
				image: "http://localhost:3001/images/Lenovo Yoga 7i.png",
				price: 950,
				stock: 40,
			},
			{
				title: "ASUS ROG Strix G15",
				image: "http://localhost:3001/images/ASUS ROG Strix G15.png",
				price: 1500,
				stock: 50,
			},
			{
				title: "ASUS ZenBook 14",
				image: "http://localhost:3001/images/ASUS ZenBook 14.png",
				price: 850,
				stock: 60,
			},
			{
				title: "HP Pavilion 15",
				image: "http://localhost:3001/images/HP Pavilion Laptop 15.png",
				price: 700,
				stock: 70,
			},
			{
				title: "HP Omen 16",
				image: "http://localhost:3001/images/HP Omen 16.png",
				price: 1300,
				stock: 80,
			},
			{
				title: "Dell XPS 13",
				image: "http://localhost:3001/images/Dell XPS 13.png",
				price: 1400,
				stock: 90,
			},
			{
				title: "Dell Inspiron 15",
				image: "http://localhost:3001/images/Dell Inspiron 15.png",
				price: 550,
				stock: 100,
			},
		]

		const existingProducts = await getAllProducts()
		if (existingProducts.length > 0) return
		await productModel.insertMany(products)
	} catch (error) {
		console.log("Error seeding initial products", error)
	}
}
