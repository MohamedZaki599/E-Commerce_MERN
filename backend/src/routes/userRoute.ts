import express from "express"
import { register, login, getMyOrders } from "../services/userService.js"
import validateJWT from "../middlewares/validateJWT.js"
import type { ExtendRequest } from "../types/extendedRequest.js"
const router = express.Router()

router.post("/register", async (req, res) => {
	try {
	const { firstName, lastName, email, password } = req.body
	const { data, statusCode } = await register({
		firstName,
		lastName,
		email,
		password,
	})
		res.status(statusCode).json(data)
	} catch (error) {
		res.status(500).send("Something went wrong")
	}
})

router.post("/login", async (req, res) => {
	try {
	const { email, password } = req.body
	const { data, statusCode } = await login({ email, password })
		res.status(statusCode).json(data)
	} catch (error) {
		res.status(500).send("Something went wrong")
	}
})


router.get("/my-orders",validateJWT, async (req: ExtendRequest, res) => {
	try {
		const userId = String(req?.user?._id)
		const { data, statusCode } = await getMyOrders(userId)
		res.status(statusCode).send(data)
	} catch (error) {
		res.status(500).send("Something went wrong")
	}
})

export default router
