import React, {ReactElement} from 'react';
import {EnhancedTableHeader} from './EnhancedTable.types';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';

const defaultProps = {
	isLoading: false,
	rowsPerPage: 100,
}

type DefaultProps = Readonly<typeof defaultProps>;

export interface EnhancedTableProps<TData> extends DefaultProps {
	headers: EnhancedTableHeader[],
	rows: TData[],
};

const EnhancedTable = <TData,>(props: EnhancedTableProps<TData>): ReactElement<EnhancedTableProps<TData>> => {
	const {headers, rows} = props;

	return (
		<TableContainer>
			<Table>
				<TableHead>
					{headers.map(header => <TableCell>{header.name}</TableCell>)}
				</TableHead>
				<TableBody>
					{headers.map(header => {
						const { } = header;
					})}
				</TableBody>
			</Table>
		</TableContainer>
	)
}