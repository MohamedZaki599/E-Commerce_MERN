import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import ProductCard from "../components/ProductCard"
import { useState, useEffect } from "react"
import type { Product } from "../types/Product"
import { BASE_URL } from "../constants/baseURL"
const HomePage = () => {
	const [products, setProducts] = useState<Product[]>([])
	const [error, setError] = useState<boolean>(false)
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`${BASE_URL}/products`)
				const data = await res.json()
				setProducts(data)
			} catch {
				setError(true)
			}
		}
		fetchData()
	}, [])

	if (error) {
		return (
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
					color: "red",
					fontSize: "2rem",
					fontWeight: "bold",
					textAlign: "center",
					textTransform: "uppercase",
					letterSpacing: "0.1em",
					wordSpacing: "0.2em",
					wordBreak: "break-word",
					wordWrap: "break-word",
					whiteSpace: "pre-wrap",
				}}
			>
				Something went wrong, Please try again!
			</Box>
		)
	}

	return (
		<Container sx={{ mt: 2, padding: "20px" }}>
			<Grid container spacing={2}>
				{products.map((product) => (
					<Grid size={{ xs: 12, md: 4 }} key={product._id}>
						<ProductCard
							_id={product._id}
							title={product.title}
							image={product.image}
							price={product.price}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default HomePage
