import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {updateWatchList} from '../CoinDashboard.slice';

type UpdateWatchListCallback = (ids: number[]) => void;
export const useUpdateWatchList = (): UpdateWatchListCallback => {
	const dispatch = useDispatch();

	return useCallback((ids: number[]) => dispatch(updateWatchList(ids)), [dispatch]);
}