import {EnhancedTableHeader} from 'components/EnhancedTable'
import React from 'react';
import {PercentCellRenderer, CoinNameCellRenderer} from './cellRenderer';
import {formatCurrency} from './CoinCapTable.utils';
import {Coin} from '../../shared/models/Coin';

export const COIN_CAP_CAP_HEADERS: EnhancedTableHeader<Coin>[] = [
	{
		field: 'cmc_rank',
		headerName: 'Rank',
		path: 'cmc_rank'
	},
	{
		field: 'name',
		headerName: 'Name',
		path: 'name',
		cellRenderer: (cellValue: number, row: Coin) => <CoinNameCellRenderer value={cellValue} row={row} />,
	},
	{
		field: 'symbol',
		headerName: 'Symbol',
		path: 'symbol',
		TableCellProps: {
			align: 'right'
		}
	},
	{
		field: 'market_cap',
		headerName: 'Market Cap',
		path: 'quote.USD.market_cap',
		TableCellProps: {
			align: 'right'
		},
		valueFormatter: formatCurrency
	},
	{
		field: 'price',
		headerName: 'Price',
		path: 'quote.USD.price',
		TableCellProps: {
			align: 'right'
		},
		valueFormatter: formatCurrency
	},
	{
		field: 'circulating_supply',
		headerName: 'Circulating Supply',
		path: 'circulating_supply',
		TableCellProps: {
			align: 'right'
		},
		valueFormatter: formatCurrency
	},
	{
		field: 'volume_24h',
		headerName: 'Volume (24h)',
		path: 'quote.USD.volume_24h',
		TableCellProps: {
			align: 'right'
		},
		valueFormatter: formatCurrency
	},
	{
		field: 'percent_change_1h',
		headerName: '% 1h',
		cellRenderer: (cellValue: number, row: Coin) => <PercentCellRenderer value={cellValue} row={row} />,
		path: 'quote.USD.percent_change_1h',
		TableCellProps: {
			align: 'right'
		}
	},
	{
		field: 'percent_change_24h',
		headerName: '% 24h',
		cellRenderer: (cellValue: number, row: Coin) => <PercentCellRenderer value={cellValue} row={row} />,
		path: 'quote.USD.percent_change_24h',
		TableCellProps: {
			align: 'right'
		}
	},
	{
		field: 'percent_change_7d',
		headerName: '% 7d',
		cellRenderer: (cellValue: number, row: Coin) => <PercentCellRenderer value={cellValue} row={row} />,
		path: 'quote.USD.percent_change_7d',
		TableCellProps: {
			align: 'right'
		}
	}
];