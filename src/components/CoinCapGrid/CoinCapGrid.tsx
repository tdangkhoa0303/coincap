import React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {Coin} from 'shared/models/Coin';
import {COIN_CAP_COLUMNS, ROWS_PER_PAGE, ROWS_PER_PAGE_OPTIONS} from './CoinCapGrid.contants';

const defaultProps = {
	loading: false,
};

type DefaultProps = Readonly<typeof defaultProps>;

export interface CoinCapGridProps extends Partial<DefaultProps> {
	rows: Coin[],
}

const CoinCapGrid: React.FC<CoinCapGridProps> = (props) => {
	const {rows, loading} = props;

	return (
		<DataGrid
			rows={rows}
			pageSize={ROWS_PER_PAGE}
			loading={loading}
			columns={COIN_CAP_COLUMNS}
			rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
		/>
	)
};

export default React.memo(CoinCapGrid);