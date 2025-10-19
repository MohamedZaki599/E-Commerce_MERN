import type { Request } from "express"
import type { IUser } from "../models/userModel.js"

export interface ExtendRequest extends Request {
	user?: IUser | null
}
