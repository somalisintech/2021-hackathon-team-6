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
					sx={{
						display: 'flex',
						width: '100%',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Box
						component="img"
						sx={{
							width: '95%',
							height: '308px',
							opacity: 0.5,
							borderRadius: '12px'
						}}
						alt="dashboard-header"
						src={dashheader}
					></Box>
					<Box
						sx={{
							display: 'flex',
							width: '80%',
							height: '114px',
							background: 'rgba(174, 180, 183, 0.48)',
							alignItems: 'center',
							borderRadius: '12px'
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
							display: 'flex',
							justifyContent: 'space-evenly'
						}}
					>
						{/* <Chart /> */}
            <Box
							component="img"
							sx={{
								width: '450px',
								height: '450px',
								borderRadius: '12px'
							}}
							alt="person-holding-globe"
							src={world}
						>
            </Box>
            <Box
							component="img"
							sx={{
								width: '450px',
								height: '450px',
								borderRadius: '12px'
							}}
							alt="person-holding-globe"
							src={world}
						>
            </Box>
					</Box>
				</Box>
			</Container>
		</>
	);
};

export default Dashboard;
