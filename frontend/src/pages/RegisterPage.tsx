import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { useRef, useState } from "react"
import { BASE_URL } from "../constants/baseURL"
import { useAuth } from "../context/Auth/AuthContext"
import { useNavigate } from "react-router-dom"

const RegisterPage = () => {
	const [error, setError] = useState("")
	const firstNameRef = useRef<HTMLInputElement>(null)
	const lastNameRef = useRef<HTMLInputElement>(null)
	const emailRef = useRef<HTMLInputElement>(null)
	const passwordRef = useRef<HTMLInputElement>(null)

	const navigate = useNavigate()

	const { login } = useAuth()

	const onSubmit = async () => {
		const firstName = firstNameRef.current?.value
		const lastName = lastNameRef.current?.value
		const email = emailRef.current?.value
		const password = passwordRef.current?.value

		// Validate the form data
		if (!firstName || !lastName || !email || !password) {
			setError("Check submitted data.")
			return
		}

		// Make the call to API to create the user
		const response = await fetch(`${BASE_URL}/user/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				firstName,
				lastName,
				email,
				password,
			}),
		})

		if (!response.ok) {
			setError("Unable to register user, please try different credientials!")
			return
		}

		const data = await response.json()

		if (!data || !data.token || !data.user) {
			setError("Invalid response from server")
			return
		}

		login(data.user.firstName, data.user.lastName, data.user.email, data.token)
		navigate("/")
	}
	return (
		<Container>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					mt: 4,
				}}
			>
				<Typography variant="h4">Register New Account</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 2,
						mt: 2,
						width: "50%",
						height: "50%",
						border: "1px solid #e0e0e0",
						borderRadius: 2,
						p: 2,
					}}
				>
					<TextField
						inputRef={firstNameRef}
						label="First Name"
						name="firstName"
						variant="outlined"
						fullWidth
					/>
					<TextField
						inputRef={lastNameRef}
						label="Last Name"
						name="lastName"
						variant="outlined"
						fullWidth
					/>
					<TextField
						inputRef={emailRef}
						label="Email"
						name="email"
						variant="outlined"
						fullWidth
					/>
					<TextField
						inputRef={passwordRef}
						type="password"
						label="Password"
						name="password"
						variant="outlined"
						fullWidth
					/>
					<Button
						onClick={onSubmit}
						name="register"
						variant="contained"
						color="primary"
						type="submit"
						sx={{ mt: 2, width: "100%" }}
					>
						Register
					</Button>
					{error && (
						<Box
							sx={{
								color: "red",
								fontSize: "1.2rem",
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
							{error}
						</Box>
					)}
				</Box>
			</Box>
		</Container>
	)
}

export default RegisterPage
