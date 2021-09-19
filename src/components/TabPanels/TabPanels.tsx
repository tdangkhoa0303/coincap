import React, {PropsWithChildren} from 'react';
import Box, {BoxProps} from '@mui/material/Box'

export interface TabPanelsProps extends BoxProps {
	currentIndex: number
}

const TabPanels: React.FC<PropsWithChildren<TabPanelsProps>> = (props) => {
	const {currentIndex, children, ...restProps} = props;

	return (
		<Box {...restProps}>
			{React.Children.toArray(children).map((child, index) => (
				<Box sx={{height: '100%'}} hidden={currentIndex !== index} key={index}>
					{child}
				</Box>
			))}
		</Box>
	)
}

export default React.memo(TabPanels);