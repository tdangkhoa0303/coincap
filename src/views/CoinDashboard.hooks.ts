import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {useAppSelector} from 'shared/hooks';
import {Coin} from 'shared/models/Coin';
import {fetchCoins} from './CoinDashboard.slice';
import {CoinState} from './CoinDashboard.types';

export const useFetchCoins = () => {
	const dispatch = useDispatch();

	return useCallback(() => dispatch(fetchCoins()), [dispatch]);
}

export const useCoinsState = (): CoinState => {
	return useAppSelector(state => state.coins);
}

export const useAllCoins = (): Coin[] => {
	const {data} = useCoinsState();
	return data;
}