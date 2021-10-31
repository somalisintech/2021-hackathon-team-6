import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Logo from '../Logo';
import dashheader from '../../assets/dashheader.jpg';
import profile from '../../assets/profile.png';
import world from '../../assets/world.png';
import Typography from '@mui/material/Typography';
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
							src={profile}
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
						{/* <Chart /> */}
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
