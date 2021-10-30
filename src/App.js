import { useRef, useState } from 'react';

import { signup, login, logout, useAuth } from './firebase';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
export default function App() {
	const [loading, setLoading] = useState(false);
	const currentUser = useAuth();

	const emailRef = useRef();
	const passwordRef = useRef();

	async function handleSignup() {
		setLoading(true);
		// try {
		await signup(emailRef.current.value, passwordRef.current.value);
		// } catch {
		// alert("Error!");
		// }
		setLoading(false);
	}

	async function handleLogin() {
		setLoading(true);
		try {
			await login(emailRef.current.value, passwordRef.current.value);
		} catch {
			alert('Error!');
		}
		setLoading(false);
	}

	async function handleLogout() {
		setLoading(true);
		try {
			await logout();
		} catch {
			alert('Error!');
		}
		setLoading(false);
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}
			>
				<Typography component="h1" variant="h5">
					Sign in/Sign up
				</Typography>
				<Typography>Currently logged in as: {currentUser?.email}</Typography>
				<Box>
					<TextField
						inputRef={emailRef}
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						inputRef={passwordRef}
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<Button disabled={loading || currentUser} onClick={handleSignup}>
						Sign Up
					</Button>
					<Button disabled={loading || currentUser} onClick={handleLogin}>
						Log In
					</Button>
					<Button disabled={loading || !currentUser} onClick={handleLogout}>
						Log Out
					</Button>
				</Box>
			</Box>
		</Container>
	);
}
