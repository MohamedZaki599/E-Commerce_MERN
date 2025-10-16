import express from "express"
import mongoose from "mongoose"
import userRoute from "./routes/userRoute.js"

const app = express()
const PORT = 3001

app.use(express.json())
mongoose
	.connect("mongodb://localhost:27017/ecommerce")
	.then(() => {
		console.log("Connected to Mongo")
	})
	.catch((error) => {
		console.log("Error connecting to Mongo", error)
	})
app.use("/user", userRoute)
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`)
})
