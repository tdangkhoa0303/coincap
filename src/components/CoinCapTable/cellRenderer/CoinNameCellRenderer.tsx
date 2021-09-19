import Typography from '@mui/material/Typography';
import React from 'react';
import {Coin} from '../../../shared/models/Coin';
import {CellRendererProps} from '../../EnhancedTable';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar'

export type CoinNameCellRendererProps = CellRendererProps<Coin>;

const CoinNameCellRenderer: React.FC<CoinNameCellRendererProps> = (props) => {
	const {value: cellValue, row} = props;

	return (
		<Box display="flex" alignItems="center">
			<Avatar
				alt={row.name}
				src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${row.id}.png`}
			/>
			<Typography ml={2} sx={{fontSize: '14px'}}>
				{cellValue}
			</Typography>
		</Box>
	)
}

export default React.memo(CoinNameCellRenderer)