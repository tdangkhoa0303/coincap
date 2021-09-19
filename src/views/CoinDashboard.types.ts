import {Coin} from 'shared/models/Coin';
import {RestClientResponse} from 'shared/utilities/RestClient';

export interface CoinState {
	data: Coin[],
	watchList: number[],
	isLoading: boolean
}

export type FetchCoinsDataResponse = Coin[];

export type FetchCoinsResponse = RestClientResponse<FetchCoinsDataResponse>