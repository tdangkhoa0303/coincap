import React from "react";

export interface EnhancedTableHeader {
	name: string,
	field: string,
	path: string,
	cellRenderer: React.ComponentType
}

export interface EnhancedTableRow {
	id: string | number,
}