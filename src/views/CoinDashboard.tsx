import React, {useCallback, useState} from 'react';
import {useMounting} from 'shared/hooks';
import {useCoinsState, useFetchCoins, useWatchListCoins} from './CoinDashboard.hooks';
import {CoinCapTable, TabPanels} from 'components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {createStyles, makeStyles} from '@mui/styles';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import AddToWatchListButton from './coinDashboard/AddToWatchListButton.container';

const useStyles = makeStyles(() => createStyles({
	root: {
		flexGrow: 2,
		overflow: 'hidden'
	}
}), {name: 'CoinCapTable'});

const CoinDashBoard: React.FC = () => {
	const fetchCoins = useFetchCoins();
	const watchListCoins = useWatchListCoins();
	const [tabIndex, setTabIndex] = useState<number>(0);
	const {data: allCoins, isLoading} = useCoinsState();
	const classes = useStyles();

	useMounting(() => {
		fetchCoins();
	})

	const handleTabChange = useCallback((_, nextTabIndex: number) => {
		setTabIndex(nextTabIndex);
	}, [setTabIndex])

	return (
		<>
			<Box display="flex" my={2} mr={2} justifyContent="space-between">
				<Tabs
					sx={{marginRight: theme => theme.spacing(2)}}
					value={tabIndex}
					onChange={handleTabChange}
				>
					<Tab icon={<MonetizationOnIcon />} />
					<Tab icon={<TrackChangesIcon />} />
				</Tabs>
				<AddToWatchListButton />
			</Box>
			<TabPanels currentIndex={tabIndex} className={classes.root}>
				<CoinCapTable rows={allCoins} loading={isLoading} />
				<CoinCapTable rows={watchListCoins} loading={isLoading} />
			</TabPanels>
		</>
	)
};

export default React.memo(CoinDashBoard);