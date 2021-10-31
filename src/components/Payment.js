import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Logo from './Logo';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import PaymentForm from './PaymentForm';
import { Grid } from '@mui/material';
import car from './../assets/undraw_electric_car_b-7-hl.svg';

function Payment() {
	return (
		<Container component="main" maxWidth="lg">
			<Box>
				<Logo />
				<Box sx={{ display: 'flex', width: '100%', gap: '30px' }}>
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
					<PaymentForm />
				</Box>
			</Box>
		</Container>
	);
}

export default Payment;
