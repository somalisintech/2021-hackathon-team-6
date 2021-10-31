import React from 'react';
import Box from '@mui/material/Box';

import geed from './../assets/Geed2.svg';
function Logo() {
	return (
		<Box
			component="img"
			mt={3}
			sx={{
				maxWidth: '70px'
			}}
			alt="logo"
			src={geed}
		></Box>
	);
}

export default Logo;
