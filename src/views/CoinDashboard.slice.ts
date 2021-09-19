import {createAsyncThunk, createSlice, SliceCaseReducers} from '@reduxjs/toolkit';
import RestClient from 'shared/utilities/RestClient';
import {CoinState, FetchCoinsResponse} from './CoinDashboard.types';

const SLICE_NAME = 'coins';

const initialCoinsState: CoinState = {
	data: [],
	isLoading: false
}

export const fetchCoins = createAsyncThunk<FetchCoinsResponse>(`${SLICE_NAME}/fetchCoins`, async () => {
	const response = await RestClient.get<FetchCoinsResponse>('/v1/cryptocurrency/listings/latest');
	return response.data;
})

const coinsSlice = createSlice<CoinState, SliceCaseReducers<CoinState>>({
	name: SLICE_NAME,
	initialState: initialCoinsState,
	reducers: {
		// omit case reducers
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

export default coinsSlice.reducer;