import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signup, login, logout, useAuth } from '../firebase';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Logo from './Logo';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Signup() {
	const [loading, setLoading] = useState(false);
	const currentUser = useAuth();

	const emailRef = useRef();
	const passwordRef = useRef();

	const history = useHistory();

	async function handleSignup() {
		setLoading(true);
		await signup(emailRef.current.value, passwordRef.current.value);
		try {
			history.push('/carbon');
		} catch (err) {
			console.error(err);
		}
		setLoading(false);
	}

	async function handleLogin() {
		setLoading(true);
		await login(emailRef.current.value, passwordRef.current.value);
		history.push('/carbon');
		setLoading(false);
	}

	async function handleLogout() {
		setLoading(true);
		await logout();
		history.push('/homepage');
		setLoading(false);
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Logo />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					width: '100%'
				}}
			>
				<Box>
					<Typography component="h1" variant="h4">
						Register Individual Account!
					</Typography>
					<Typography variant="h6">
						For the purpose of industry regulation, your details are required.
						{/* Currently logged in as: {currentUser?.email} */}
					</Typography>
				</Box>

				<Box>
					{/* Currently not hooked up with firebase , here for demo only*/}
					<TextField
						margin="normal"
						required
						fullWidth
						id="name"
						label="Name"
						name="name"
						autoComplete="name"
						autoFocus
					/>
					{/* Currently not hooked up with firebase , here for demo only*/}
					<TextField
						margin="normal"
						required
						fullWidth
						id="lastname"
						label="Last Name"
						name="lastname"
						autoComplete="lastname"
						autoFocus
					/>
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

export default Signup;
