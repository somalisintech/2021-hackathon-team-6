import React from 'react';
import Box from '@mui/material/Box';
import geed from './../assets/Geed.svg';
import { Link } from 'react-router-dom';
function Logo() {
	return (
		<Link to="/">
			<Box
				component="img"
				mt={3}
				sx={{
					maxWidth: '70px'
					/*maxWidth: '20%'*/
				}}
				alt="logo"
				src={geed}
			></Box>
		</Link>
	);
}

export default Logo;
