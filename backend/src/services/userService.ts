import { userModel } from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

interface RegisterParams {
	firstName: string
	lastName: string
	email: string
	password: string
}

interface JWTPayload {
	firstName: string
	lastName: string
	email: string
}

export const register = async ({
	firstName,
	lastName,
	email,
	password,
}: RegisterParams) => {
	// Registration logic will go here
	const findUser = await userModel.findOne({ email })
	if (findUser) {
		return { data: "User already exists", statusCode: 400 }
	}
	const hashedPassword = await bcrypt.hash(password, 10)
	const newUser = new userModel({
		firstName,
		lastName,
		email,
		password: hashedPassword,
	})
	await newUser.save()
	return { 
		data: {
			token: generateJWT({ firstName, lastName, email }),
			user: { firstName, lastName, email }
		}, 
		statusCode: 200 
	}
}

interface LoginParams {
	email: string
	password: string
}
export const login = async ({ email, password }: LoginParams) => {
	// Login logic will go here
	const findUser = await userModel.findOne({ email })
	if (!findUser) {
		return { data: "User not found", statusCode: 404 }
	}
	const passwordMatch = await bcrypt.compare(password, findUser.password)
	if (passwordMatch) {
		return {
			data: {
				token: generateJWT({
					firstName: findUser.firstName,
					lastName: findUser.lastName,
					email: findUser.email,
				}),
				user: {
					firstName: findUser.firstName,
					lastName: findUser.lastName,
					email: findUser.email
				}
			},
			statusCode: 200,
		}
	}
	return { data: "Incorrect email or password", statusCode: 401 }
}

const generateJWT = (data: JWTPayload) => {
	// JWT generation logic will go here
	return jwt.sign(data, process.env.JWT_SECRET || "")
}
