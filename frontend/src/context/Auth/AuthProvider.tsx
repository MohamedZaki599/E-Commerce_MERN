import type { FC, PropsWithChildren } from "react"
import { useState } from "react"
import { AuthContext } from "./AuthContext"

const FIRSTNAME_KEY = "firstName"
const LASTNAME_KEY = "lastName"
const EMAIL_KEY = "email"
const TOKEN_KEY = "token"

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [firstName, setFirstName] = useState<string | null>(
		localStorage.getItem(FIRSTNAME_KEY)
	)
	const [lastName, setLastName] = useState<string | null>(
		localStorage.getItem(LASTNAME_KEY)
	)
	const [email, setEmail] = useState<string | null>(
		localStorage.getItem(EMAIL_KEY)
	)
	const [token, setToken] = useState<string | null>(
		localStorage.getItem(TOKEN_KEY)
	)

	const isAuthenticated = !!token

	const login = (firstName: string, lastName: string, email: string, token: string) => {
		setFirstName(firstName)
		setLastName(lastName)
		setEmail(email)
		setToken(token)
		localStorage.setItem(FIRSTNAME_KEY, firstName)
		localStorage.setItem(LASTNAME_KEY, lastName)
		localStorage.setItem(EMAIL_KEY, email)
		localStorage.setItem(TOKEN_KEY, token)
	}

	const logout = () => {
		localStorage.removeItem(FIRSTNAME_KEY)
		localStorage.removeItem(LASTNAME_KEY)
		localStorage.removeItem(EMAIL_KEY)
		localStorage.removeItem(TOKEN_KEY)
		setFirstName(null)
		setLastName(null)
		setEmail(null)
		setToken(null)
	}

	return (
		<AuthContext.Provider
			value={{ firstName, lastName, email, token, isAuthenticated, login, logout }}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
