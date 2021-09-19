import {createAsyncThunk, createSlice, SliceCaseReducers} from '@reduxjs/toolkit';
import RestClient from 'shared/utilities/RestClient';
import {CoinState, FetchCoinsResponse} from './CoinDashboard.types';

const SLICE_NAME = 'coins';

const initialCoinsState: CoinState = {
	data: [],
	watchList: [],
	isLoading: false
}

export const fetchCoins = createAsyncThunk<FetchCoinsResponse>(`${SLICE_NAME}/fetchCoins`, async () => {
	const response = await RestClient.get<FetchCoinsResponse>('/v1/cryptocurrency/listings/latest?limit=5000');
	return response.data;
})

const coinsSlice = createSlice<CoinState, SliceCaseReducers<CoinState>>({
	name: SLICE_NAME,
	initialState: initialCoinsState,
	reducers: {
		updateWatchList: (state, {payload}) => ({
			...state,
			watchList: payload
		})
	},
	extraReducers: builder => {
		builder
			.addCase(fetchCoins.pending, (state, action) => ({
				...state,
				isLoading: true
			}))
			.addCase(fetchCoins.fulfilled, (state, {payload}) => {
				const {data} = payload;

				return ({
					...state,
					data: data,
					isLoading: false
				})
			})
	}
})

export const {updateWatchList} = coinsSlice.actions;
export default coinsSlice.reducer;