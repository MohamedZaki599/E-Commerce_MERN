import { Typography, Container } from "@mui/material"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { useRef, useState } from "react"
import { baseURL } from "../constants/baseURL"

const RegisterPage = () => {
	const [error, setError] = useState<string | null>(null)
	const firstNameRef = useRef<HTMLInputElement>(null)
	const lastNameRef = useRef<HTMLInputElement>(null)
	const emailRef = useRef<HTMLInputElement>(null)
	const passwordRef = useRef<HTMLInputElement>(null)

	const onSubmit = async () => {
		const firstName = firstNameRef.current?.value
		const lastName = lastNameRef.current?.value
		const email = emailRef.current?.value
		const password = passwordRef.current?.value

		console.log(firstName, lastName, email, password)

		// Make API call to register user

		const res = await fetch(`${baseURL}/user/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				firstName,
				lastName,
				email,
				password,
			}),
		})
		if (!res.ok) {
			setError(
				"Unable to register user, Please try different email or password!"
			)
			return
		}
		const data = await res.json()
		console.log(data)
		setError(null)
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
