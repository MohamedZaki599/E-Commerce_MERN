import { Container, Box, Typography } from "@mui/material"
import { useAuth } from "../context/Auth/AuthContext"
import { useEffect } from "react"

const MyOrdersPage = () => {
	const { getMyOrders, myOrders } = useAuth()
	useEffect(() => {
		if (!myOrders.length) getMyOrders()
	}, [myOrders, getMyOrders])

	return (
		<Container
			fixed
			sx={{
				mt: 2,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				gap: 2,
			}}
		>
			<Typography variant="h4" fontWeight="bold" textAlign="center">
				My Orders
			</Typography>
			{myOrders.map(({ orderItems, total, address }) => (
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="space-between"
					alignItems="center"
					gap={2}
					sx={{
						border: 1,
						borderColor: "#f2f2f2",
						borderRadius: 5,
						padding: 1,
						width: "100%",
						maxWidth: "600px",
						margin: "0 auto",
						boxShadow: 1,
						transition: "box-shadow 0.3s ease",
						"&:hover": {
							boxShadow: 3,
						},
						backgroundColor: "#f2f2f2",
					}}
				>
					<Typography variant="body1" fontWeight="bold" textAlign="center">
						Total: {total}
					</Typography>
					<Typography variant="body1" fontWeight="bold" textAlign="center">
						Address: {address}
					</Typography>
					<Typography variant="body1" fontWeight="bold" textAlign="center">
						Order Items:{" "}
						{orderItems.map((item: any) => item.productTitle).join(", ")}
					</Typography>
					<Typography variant="body1" fontWeight="bold" textAlign="center">
						Order Items:{" "}
						{orderItems.map((item: any) => item.quantity).join(", ")}
					</Typography>
					<Typography variant="body1" fontWeight="bold" textAlign="center">
						Order Items:{" "}
						{orderItems.map((item: any) => item.unitPrice).join(", ")}
					</Typography>
				</Box>
			))}
		</Container>
	)
}

export default MyOrdersPage
