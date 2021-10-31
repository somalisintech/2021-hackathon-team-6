import Carbon from './components/Carbon';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Box from '@mui/material/Box';

export default function App() {
	return (
		// <Carbon />
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-around'
			}}
		>
			<Box sx={{ alignSelf: 'left' }}>
				<Signup />
			</Box>
			<div>
				<Homepage />
			</div>
		</Box>
	);
}
