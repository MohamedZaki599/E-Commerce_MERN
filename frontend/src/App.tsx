import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Navbar from "./components/Navbar"



export default function App(): React.JSX.Element {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	)
}
