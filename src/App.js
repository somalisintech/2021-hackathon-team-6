import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Box from '@mui/material/Box';

export default function App() {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center'
			}}
		>
			<div>
				<Signup />
			</div>
			<div>
				<Homepage />
			</div>
		</Box>
	);
}
