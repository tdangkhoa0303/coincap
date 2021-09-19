import {GridColDef} from '@mui/x-data-grid';
import React from 'react';
import {PercentCellRenderer} from './cellRenderer';
import {getCoinChange} from './CoinCapGrid.utils';

export const COIN_CAP_COLUMNS: GridColDef[] = [
	{
		field: 'cmc_rank',
		headerName: 'Rank',
		width: 160
	},
	{
		field: 'symbol',
		headerName: 'Symbol',
		width: 200
	},
	{
		field: 'market_cap',
		headerName: 'Market Cap',
		valueGetter: (params) => {
			const coinChange = getCoinChange(params)
			return coinChange.market_cap;
		},
		width: 240
	},
	{
		field: 'price',
		headerName: 'Price',
		valueGetter: (params) => {
			const coinChange = getCoinChange(params)
			return coinChange.price;
		},
		width: 240,
	},
	{
		field: 'circulating_supply',
		headerName: 'Circulating Supply',
		width: 240,
	},
	{
		field: 'volume_24h',
		headerName: 'Volume (24h)',
		valueGetter: (params) => {
			const coinChange = getCoinChange(params)
			return coinChange.volume_24h;
		},
		width: 240
	},
	{
		field: 'percent_change_1h',
		headerName: '% 1h',
		valueGetter: (params) => {
			const coinChange = getCoinChange(params)
			return coinChange.percent_change_1h;
		},
		width: 160,
		renderCell: params => <PercentCellRenderer params={params} />
	},
	{
		field: 'percent_change_24h',
		headerName: '% 24h',
		valueGetter: (params) => {
			const coinChange = getCoinChange(params)
			return coinChange.percent_change_24h;
		},
		width: 160,
		renderCell: params => <PercentCellRenderer params={params} />
	},
	{
		field: 'percent_change_7d',
		headerName: '% 7d',
		valueGetter: (params) => {
			const coinChange = getCoinChange(params)
			return coinChange.percent_change_7d;
		},
		width: 160,
		renderCell: params => <PercentCellRenderer params={params} />
	}
];

export const ROWS_PER_PAGE = 100;

export const ROWS_PER_PAGE_OPTIONS = [100, 150, 200];