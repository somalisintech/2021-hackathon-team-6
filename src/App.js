import Carbon from './components/Carbon';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Box from '@mui/material/Box';

export default function App() {
	return (
		<>
			<Router>
				<Switch>
					{/* /*Uncomment to see Carbon page*/}
					{/* // <Carbon /> */}
					{/* //Comment out to see Carbon page */}
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
					<Route path="/carbon">
						<Carbon />
					</Route>
				</Switch>
			</Router>
		</>
	);
}
