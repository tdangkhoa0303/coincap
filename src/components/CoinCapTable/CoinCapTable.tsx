import React from 'react';
import {Coin} from 'shared/models/Coin';
import {COIN_CAP_CAP_HEADERS} from './CoinCapTable.contants';
import {EnhancedTable} from 'components/EnhancedTable';
import {makeStyles, createStyles} from '@mui/styles';

const defaultProps = {
	loading: false,
};
type DefaultProps = Readonly<typeof defaultProps>;

export interface CoinCapTableProps extends Partial<DefaultProps> {
	rows: Coin[],
}
export type CoinCapTableWithDefaultProps = CoinCapTableProps & DefaultProps;

const useStyles = makeStyles(() => createStyles({
	root: {
		height: '100%',
	}
}), {name: 'CoinCapTable'});

const CoinCapTable: React.FC<CoinCapTableProps> = (props) => {
	const {rows, loading} = props as CoinCapTableWithDefaultProps;
	const classes = useStyles();

	return (
		<EnhancedTable<Coin>
			rows={rows}
			isLoading={loading}
			className={classes.root}
			headers={COIN_CAP_CAP_HEADERS}
		/>
	)
};

CoinCapTable.defaultProps = defaultProps;

export default React.memo(CoinCapTable);