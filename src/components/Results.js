import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Logo from './Logo';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import React from 'react';
import { CardMedia, Grid } from '@mui/material';
import car from './../assets/undraw_electric_car_b-7-hl.svg';
import { Link } from 'react-router-dom';

function Results() {


	return (
		<Container component="main" maxWidth="lg">
			<Box>
				<Logo />
				<Box sx={{ display: 'flex', width: '100%', gap: '30px' }}>
					<Card component="div" sx={{ 
						marginTop: '250px', 
						padding:'80px',  
						height: '100%', 
						borderRadius: '25px',
						backgroundColor: '#415952' }}>
							<CardHeader
									title="Xalima Thunberg"
									subheader="Someone who cares for the planet"
									sx={{
										color: '#ffffff'
									}}
								/>
					</Card>
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
					<Link to={{pathname: "/payment"}}>
						<Button>
							Payment
							</Button>
					</Link>
				</Box>
			</Box>
		</Container>
	);
}
export default Results;
