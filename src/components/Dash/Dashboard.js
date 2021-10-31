import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Logo from '../Logo';
import dashheader from '../../assets/dashheader.jpg';
import profile from '../../assets/profile.png';
import world from '../../assets/world.png';
import chartleft from '../../assets/chartleft.svg';
import chartright from '../../assets/chartright.svg';
import Typography from '@mui/material/Typography';
import environment from '../../assets/undraw_environment_iaus.svg';
// import Chart from './Chart'

const Dashboard = () => {
	return (
		<>
			<Container component="main" maxWidth="lg">
				<Logo />
				<Box
					mt={3}
					sx={{
						display: 'flex',
						width: '100%',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Box
						component="div"
						sx={{
							position: 'relative',
							width: '95%',
							height: '308px',
							opacity: 0.5,
							borderRadius: '12px',
							backgroundImage: `url(${dashheader})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center'
						}}

						// alt="dashboard-header",

						// src={dashheader}
					></Box>
					<Box
						sx={{
							position: 'absolute',
							display: 'flex',
							height: '114px',
							background: 'rgba(174, 180, 183, 0.48)',
							alignItems: 'center',
							borderRadius: '12px',
							minWidth: '1017px',
							top: '295px',
							maxWidth: '100%'
						}}
					>
						<Box
							component="img"
							sx={{
								margin: '5px',
								width: '81px',
								height: '81px',
								borderRadius: '12px'
							}}
							alt="profile"
							src={environment}
						></Box>
						<Typography component="h1" variant="h4">
							Xalimo Thunberg
						</Typography>
					</Box>
					<Box
						sx={{
							width: '100%',

							display: 'flex',
							justifyContent: 'space-evenly',
							position: 'relative'
						}}
					>
						<Box
							display="flex"
							sx={{
								justifyContent: 'space-between',
								width: '100%',
								marginTop: '50px',
								padding: '50px'
							}}
						>
							{/* Charts */}
							<Box sx={{ display: 'flex', gap: '30px' }}>
								<Box
									sx={{
										display: 'flex',

										flexDirection: 'column',
										boxShadow: ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
									}}
								>
									<Box p={3}>
										<Typography component="h1" variant="h6">
											Carbon Chart
										</Typography>
										<Typography>Here are your carbon stats</Typography>
									</Box>
									<Box
										p={3}
										component="img"
										// sx={{
										// 	width: '20%'
										// }}
										alt="person-holding-globe"
										src={chartleft}
									></Box>
								</Box>
								<Box
									sx={{
										display: 'flex',

										flexDirection: 'column',
										boxShadow: ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
									}}
								>
									<Box p={3}>
										<Typography component="h1" variant="h6">
											Paid
										</Typography>
										<Typography>Here are your payment stats</Typography>
									</Box>
									<Box
										p={3}
										component="img"
										// sx={{
										// 	width: '20%'
										// }}
										alt="person-holding-globe"
										src={chartright}
									></Box>
								</Box>
							</Box>
							{/* <Box
								component="img"
								sx={{
									width: '30%',
									// height: '450px',
									borderRadius: '12px'
									// position: 'absolute',
									// right: '0',
									// top: '186px'
								}}
								alt="person-holding-globe"
								src={world}
							></Box> */}
						</Box>

						<Box
							component="img"
							sx={{
								width: '30%',
								// height: '450px',
								borderRadius: '12px',
								position: 'absolute',
								right: '0',
								top: '186px'
							}}
							alt="person-holding-globe"
							src={world}
						></Box>
					</Box>
				</Box>
			</Container>
		</>
	);
};

export default Dashboard;
