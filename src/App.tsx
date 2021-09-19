import React from 'react';
import {Header} from 'components';
import {Provider} from 'react-redux';
import store from 'shared/redux/store';
import CoinDashboard from 'views/CoinDashboard';
import Box from '@mui/material/Box';
import theme from 'shared/theme';
import ThemeProvider from '@mui/material/styles/ThemeProvider'

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Box sx={{
					display: 'flex',
					height: '100vh',
					flexDirection: 'column',
				}}>
					<Header />
					<CoinDashboard />
				</Box>
			</ThemeProvider>
		</Provider>

	);
}

export default App;
