import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Logo from './Logo';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import React from 'react';
import { Grid } from '@mui/material';
import car from './../assets/undraw_electric_car_b-7-hl.svg';
function Results() {
	return (
		<Container component="main" maxWidth="lg">
			<Box>
				<Logo />
				<Box sx={{ display: 'flex', width: '100%', gap: '30px' }}>
					<Box component="div" sx={{ padding: '50px', height: '100%' }}>
						<Paper sx={{ marginTop: '50px' }}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id fugit
							cupiditate repellat ad facilis iure quas exercitationem quis.
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id fugit
							cupiditate repellat ad facilis iure quas exercitationem quis Lorem
							ipsum dolor sit amet, consectetur adipisicing elit. Id fugit
							cupiditate repellat ad facilis iure quas exercitationem quis
							excepturi iste.
						</Paper>
					</Box>
					<Box sx={{ flex: '1' }}>
						<Box
							component="img"
							sx={{
								maxWidth: 650,
								paddingTop: 5
							}}
							alt="car"
							src={car}
						/>
						{/* <img src={car} alt="car" sx={{ maxWidth: '100%' }} /> */}
					</Box>
				</Box>
			</Box>
		</Container>
	);
}
export default Results;
