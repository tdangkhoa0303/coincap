import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Logo from '../Logo/Logo'

export type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
	return (
		<AppBar
			position="static"
			sx={{
				backgroundColor: 'none'
			}}
		>
			<Toolbar>
				<IconButton>
					<Logo />
				</IconButton>
				<Typography variant="h6">
					CoinCap
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default React.memo(Header);