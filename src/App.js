import Carbon from './components/Carbon';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Payment from './components/Payment';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Box from '@mui/material/Box';

import Results from './components/Results';

export default function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
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
					</Route>
					<Route path="/payment">
						<Payment />
					</Route>

					<Route path="/carbon">
						<Carbon />
					</Route>
					<Route path="/results">
						<Results />
					</Route>
				</Switch>
			</Router>
		</>
	);
}
