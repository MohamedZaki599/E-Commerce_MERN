import { createContext, useContext } from "react"

interface AuthContextType {
	firstName: string | null
	lastName: string | null
	email: string | null
	token: string | null
	isAuthenticated: boolean
	login: (firstName: string, lastName: string, email: string, token: string) => void
	logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
	firstName: null,
	lastName: null,
	email: null,
	token: null,
	login: () => {},
	isAuthenticated: false,
	logout: () => {},
})

export const useAuth = () => useContext(AuthContext)
