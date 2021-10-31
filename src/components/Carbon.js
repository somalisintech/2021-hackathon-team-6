import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Logo from './Logo';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';

import { red } from '@mui/material/colors';
import explore from './../assets/undraw_explore_re_8l4v.svg';
import environment from './../assets/undraw_environment_iaus.svg';
import car from './../assets/undraw_electric_car_b-7-hl.svg';

// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
export default function Carbon() {
	return (
		<Container component="main" maxWidth="lg">
			<Logo />
			<Box mt="50px" mb="60px" textAlign="center">
				<Typography component="h1" variant="h3" gutterBottom>
					What is your carbon footprint?
				</Typography>
				<Typography component="p" variant="subtitle1">
					To begin this journey, tell us how you be using your carbon levels
				</Typography>
			</Box>
			<Box>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Card sx={{ maxWidth: 345, boxShadow: '0' }}>
							<CardMedia
								component="img"
								height="194"
								image={explore}
								alt="Paella dish"
								sx={{ objectFit: 'contain' }}
							/>

							<CardHeader
								avatar={
									<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
										X
									</Avatar>
								}
								title="Xalima Thunberg"
								subheader="Someone who cares for the planet"
								sx={{
									border: '1px solid #1565D8',
									marginTop: '50px',
									borderRadius: '4px'
								}}
							/>
						</Card>
					</Grid>
					<Grid item xs={4}>
						<Card sx={{ maxWidth: 345, boxShadow: '0' }}>
							<CardMedia
								component="img"
								height="194"
								image={environment}
								alt="Paella dish"
								sx={{ objectFit: 'contain' }}
							/>

							<CardHeader
								avatar={
									<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
										A
									</Avatar>
								}
								title="Abdi Attenborough"
								subheader="You care but you still fly to places"
								sx={{
									border: '1px solid #1565D8',
									marginTop: '50px',
									borderRadius: '4px'
								}}
							/>
						</Card>
					</Grid>
					<Grid item xs={4}>
						<Card sx={{ maxWidth: 345, boxShadow: '0' }}>
							<CardMedia
								component="img"
								height="194"
								image={car}
								alt="Paella dish"
								sx={{ objectFit: 'contain' }}
							/>

							<CardHeader
								avatar={
									<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
										W
									</Avatar>
								}
								title="Worst"
								subheader="Own or belong to a company"
								sx={{
									border: '1px solid #1565D8',
									marginTop: '50px',
									borderRadius: '4px'
								}}
							/>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}
