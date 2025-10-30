import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import CartPage from "./pages/CartPage"
import Navbar from "./components/Navbar"
import RegisterPage from "./pages/RegisterPage"
import AuthProvider from "./context/Auth/AuthProvider"
import CartProvider from "./context/Cart/CartProvider"
import ProtectedRoute from "./components/ProtectedRoute"

export default function App(): React.JSX.Element {
	return (
		<AuthProvider>
			<CartProvider>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route element={<ProtectedRoute />}>
							<Route path="/cart" element={<CartPage />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</CartProvider>
		</AuthProvider>
	)
}
