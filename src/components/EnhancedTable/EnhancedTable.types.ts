import React from "react";
import {TableCellProps} from '@mui/material/TableCell'

export interface EnhancedTableHeader<TData> {
	headerName: string,
	field: string,
	path: string,
	/**
	 * Because we don't know the type of the value
	 * @param value
	 */
	cellRenderer?: (value: any, row: TData) => React.ReactNode,
	TableCellProps?: TableCellProps,
	valueFormatter?: (value: any) => string
}

export interface EnhancedTableRow {
	id: string | number,
}

export interface CellRendererProps<TData extends EnhancedTableRow> {
	value: any,
	row: TData
}