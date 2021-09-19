import {CoinChange} from 'shared/models/Coin';
import {GridValueGetterParams} from '@mui/x-data-grid';
import get from 'lodash/get';

export const getCoinChange = (params: GridValueGetterParams) => {
	return get(params.row, 'quote.USD') as CoinChange;
}