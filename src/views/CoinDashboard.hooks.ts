import {useCallback, useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {useAppSelector} from 'shared/hooks';
import {fetchCoins} from './CoinDashboard.slice';
import {CoinState} from './CoinDashboard.types';
import {Coin} from '../shared/models/Coin';

export const useFetchCoins = () => {
	const dispatch = useDispatch();

	return useCallback(() => dispatch(fetchCoins()), [dispatch]);
}

export const useCoinsState = (): CoinState => {
	return useAppSelector(state => state.coins);
}

export const useWatchListCoins = (): Coin[] => {
	const {data: allCoins, watchList} = useCoinsState();

	return useMemo(() => allCoins.filter(coin => watchList.includes(coin.id)), [allCoins, watchList])
}