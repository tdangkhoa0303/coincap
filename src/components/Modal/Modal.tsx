import React, {PropsWithChildren, useImperativeHandle, useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Paper from '@mui/material/Paper';
import MuiModal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import noop from 'lodash/noop';
import Fade from '@mui/material/Fade';

export type ModalRef = {
	isOpen: boolean,
	setIsOpen: (isOpen: boolean) => void
}

const defaultProps = {
	onPrimaryButtonClick: noop,
	onSecondaryButtonClick: noop,
	secondaryButtonText: 'Cancel',
	primaryButtonText: 'Done'
}

type DefaultProps = Readonly<typeof defaultProps>;

export interface ModalProps extends Partial<DefaultProps> {
	title: string,
	forwardedRef: React.Ref<ModalRef>,
}

export type ModalWithDefaultProps = PropsWithChildren<ModalProps> & DefaultProps;

const Modal: React.FC<PropsWithChildren<ModalProps>> = (props) => {
	const {
		title,
		secondaryButtonText,
		onSecondaryButtonClick,
		onPrimaryButtonClick,
		primaryButtonText,
		forwardedRef,
		children
	} = props as ModalWithDefaultProps;
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useImperativeHandle(forwardedRef, () => ({
		isOpen,
		setIsOpen
	}), [isOpen, setIsOpen])

	return (
		<MuiModal
			open={isOpen}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 200,
			}}
		>
			<Fade in={isOpen}>
				<Paper sx={{
					position: 'absolute' as 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: theme => theme.spacing(60),
					boxShadow: 24,
					p: 4,
					outline: 'none'
				}}>
					<Typography variant="h5">
						{title}
					</Typography>
					<Box my={3}>
						{children}
					</Box>
					<Box display="flex" justifyContent="flex-end">
						<Button variant="outlined" onClick={onSecondaryButtonClick}>
							{secondaryButtonText}
						</Button>
						<Button
							variant="contained"
							sx={{
								marginLeft: theme => theme.spacing(2)
							}}
							onClick={onPrimaryButtonClick}
						>
							{primaryButtonText}
						</Button>
					</Box>
				</Paper>
			</Fade>
		</MuiModal>
	)
}

Modal.defaultProps = defaultProps;

const MemoizedModal = React.memo(Modal);
export default React.forwardRef<ModalRef, Omit<PropsWithChildren<ModalProps>, "forwardedRef">>((props, ref) => (
	<MemoizedModal forwardedRef={ref} {...props} />
));