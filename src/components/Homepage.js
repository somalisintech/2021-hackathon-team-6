import React from 'react';
import Typography from '@mui/material/Typography';

import hero from './../assets/garden.png';
import Box from '@mui/material/Box';
import whitesquiggle from './../assets/whitesquiggle.svg';
function Homepage() {
	return (
		<Box
			component="img"
			sx={{
				paddingTop: 30,
				maxWidth: 500

			}}
			alt="Geed"
			src={hero}
		/>
	);
}

export default Homepage;
