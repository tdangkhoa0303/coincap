import React, {ReactElement, useCallback, useMemo, useState} from 'react';
import {EnhancedTableHeader, EnhancedTableRow} from './EnhancedTable.types';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import get from 'lodash/get';
import {DEFAULT_PAGE, DEFAULT_ROWS_PER_PAGE, DEFAULT_ROWS_PER_PAGE_OPTIONS} from './EnhancedTable.constants';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';

const defaultProps = {
	isLoading: false,
	rowsPerPage: DEFAULT_ROWS_PER_PAGE,
	initialPage: DEFAULT_PAGE,
	rowsPerPageOptions: DEFAULT_ROWS_PER_PAGE_OPTIONS
}

type DefaultProps = Readonly<typeof defaultProps>;

export interface EnhancedTableProps<TData extends EnhancedTableRow> extends Partial<DefaultProps> {
	headers: EnhancedTableHeader<TData>[],
	rows: TData[],
	className?: string
}

export type EnhancedTableWithDefaultProps<TData extends EnhancedTableRow> = EnhancedTableProps<TData> & DefaultProps;

const EnhancedTable = <TData extends EnhancedTableRow,>(props: EnhancedTableProps<TData>): ReactElement<EnhancedTableProps<TData>> => {
	const {
		rows,
		headers,
		isLoading,
		className,
		initialPage,
		rowsPerPageOptions,
		rowsPerPage: initialRowsPerPage
	} = props as EnhancedTableWithDefaultProps<TData>;
	const [page, setPage] = useState<number>(initialPage);
	const [rowsPerPage, setRowsPerPage] = useState<number>(initialRowsPerPage)

	const handleChangePage = useCallback((event: React.MouseEvent<HTMLButtonElement> | null, nextPage: number) => {
		setPage(nextPage);
	}, [setPage])

	const handleChangeRowsPerPage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	}, []);

	const displayedRows: TData[] = useMemo(() => (
		rows.slice((page) * rowsPerPage, (page + 1) * rowsPerPage + 1)
	), [page, rows, rowsPerPage]);

	const emptyRows = useMemo(() => Math.max(0, (1 + page) * rowsPerPage - rows.length), [page, rows.length, rowsPerPage])

	return (
		<Paper sx={{
			display: 'flex',
			flexDirection: 'column',
			height: '100%'
		}}>
			<TableContainer className={className} sx={{
				height: 0,
				flexGrow: 2,
			}}>
				<Table stickyHeader sx={{height: '100%'}}>
					<TableHead>
						<TableRow>
							{headers.map(({field, headerName, TableCellProps}) => (
								<TableCell key={field} {...TableCellProps}>{headerName}</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{displayedRows.map(row => (
							<TableRow key={row.id}>
								{headers.map(header => {
									const {cellRenderer, field, path, valueFormatter, TableCellProps} = header;
									const cellValue = get(row, path, '');
									if (cellRenderer) {
										return (
											<TableCell key={field} {...TableCellProps}>
												{cellRenderer(cellValue, row)}
											</TableCell>
										)
									}

									return (
										<TableCell key={field} {...TableCellProps}>
											{valueFormatter ? valueFormatter(cellValue) : cellValue}
										</TableCell>
									)
								})}
							</TableRow>
						))}
						{emptyRows > 0 && (
							<TableRow
								sx={{
									height: 53 * emptyRows,
								}}
							>
								<TableCell colSpan={headers.length} />
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
			{isLoading ? (
				<CircularProgress sx={{
					position: 'absolute',
					transform: 'translate(-50%, -50%)',
					top: '50%',
					right: '50%'
				}}/>
			) : (
				<TablePagination
					page={page}
					component="div"
					sx={{overflow: 'hidden'}}
					count={rows.length}
					rowsPerPage={rowsPerPage}
					rowsPerPageOptions={rowsPerPageOptions}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			)}
		</Paper>
	)
}

EnhancedTable.defaultProps = defaultProps;

export default React.memo(EnhancedTable) as unknown as typeof EnhancedTable;