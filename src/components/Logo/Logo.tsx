import React from 'react';
import {styled} from '@mui/material/styles';
import {LOGO_URL} from 'shared/constants';
import Box from '@mui/material/Box';

const defaultProps = {
	size: 48
}

export interface LogoProps extends Partial<typeof defaultProps> {
	className?: string
}

const LogoWrapper = styled(Box)<LogoProps>(
	{
		objectFit: 'cover'
	},
	({size}) => ({
		height: size,
		width: size
	})
);

const StyledImage = styled('img')({
	width: '100%',
	height: '100%'
})

const Logo: React.FC<LogoProps> = (props) => {
	const {size, className} = props;

	return (
		<LogoWrapper size={size}>
			<StyledImage
				src={LOGO_URL}
				alt='logo'
				className={className}
			/>
		</LogoWrapper>
	)
}

Logo.defaultProps = defaultProps;
export default React.memo(Logo);