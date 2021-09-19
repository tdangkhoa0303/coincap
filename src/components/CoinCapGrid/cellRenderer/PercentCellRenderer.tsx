import Typography from '@mui/material/Typography';
import {GridValueGetterParams} from '@mui/x-data-grid';
import React, {useMemo} from 'react';

export interface PercentCellRendererProps {
	params: GridValueGetterParams
};

const PercentCellRenderer: React.FC<PercentCellRendererProps> = (props) => {
	const {params} = props;

	const cellValue = useMemo(() => {
		const {valueGetter} = params.colDef;

		return (valueGetter ? valueGetter(params) : params.value) as number
	}, [params]);

	return (
		<Typography sx={{
			color: theme => cellValue > 0 ? theme.palette.common.green : theme.palette.common.red
		}}>
			{`${cellValue.toFixed(2)}%`}
		</Typography>
	)
}

export default React.memo(PercentCellRenderer)