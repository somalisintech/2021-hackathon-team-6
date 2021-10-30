import React from 'react';
import Typography from '@mui/material/Typography';
import hero from './../assets/hero.png';
import Box from '@mui/material/Box';
function Homepage() {
	return (
		<Box
			component="img"
			sx={{
				maxWidth: 500
			}}
			alt="Geed"
			src={hero}
		/>
	);
}

export default Homepage;
