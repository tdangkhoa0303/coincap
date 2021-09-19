import Typography from '@mui/material/Typography';
import React from 'react';
import {Coin} from '../../../shared/models/Coin';
import {CellRendererProps} from '../../EnhancedTable';

export type PercentCellRendererProps = CellRendererProps<Coin>;

const PercentCellRenderer: React.FC<PercentCellRendererProps> = (props) => {
	const {value: cellValue} = props;

	return (
		<Typography sx={{
			color: theme => cellValue > 0 ? theme.palette.common.green : theme.palette.common.red,
			textAlign: 'right',
			fontSize: '14px'
		}}>
			{`${cellValue.toFixed(2)}%`}
		</Typography>
	)
}

export default React.memo(PercentCellRenderer)