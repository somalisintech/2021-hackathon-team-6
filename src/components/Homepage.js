import React from 'react';
import Typography from '@mui/material/Typography';

import hero from './../assets/hero.png';
import Box from '@mui/material/Box';
import whitesquiggle from './../assets/whitesquiggle.svg';
function Homepage() {
	return (
		<Box
			component="img"
			sx={{
				maxWidth: 650,
				paddingTop: 5
			}}
			alt="Geed"
			src={hero}
		/>
	);
}

export default Homepage;
