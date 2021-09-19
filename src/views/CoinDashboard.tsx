import React from 'react';
import {useMounting} from 'shared/hooks';
import {useAllCoins, useFetchCoins} from './CoinDashboard.hooks';
import {CoinCapGrid} from 'components'

const CoinDashBoard: React.FC = () => {
	const fetchCoins = useFetchCoins();
	const allCoins = useAllCoins();

	useMounting(() => {
		fetchCoins();
	})

	return <CoinCapGrid rows={allCoins} />
};

export default React.memo(CoinDashBoard);