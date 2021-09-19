import React, {useCallback, useImperativeHandle, useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CoinSuggestionList from './CoinSuggestionList';
import {useCoinsState} from '../CoinDashboard.hooks';
import {useUpdateWatchList} from './AddToWatchListButtonModal.hooks';

export type ModalRef = {
	isOpen: boolean,
	setIsOpen: (isOpen: boolean) => void
}

export interface AddToWatchListButtonModalProps {
	forwardedRef: React.Ref<ModalRef>,
}

const AddToWatchListButtonModal: React.FC<AddToWatchListButtonModalProps> = (props) => {
	const {forwardedRef} = props;
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const {watchList: initialWatchList} = useCoinsState();
	const updateWatchList = useUpdateWatchList();
	const [internalWatchList, setInternalWatchList] = useState<number[]>(initialWatchList);

	useImperativeHandle(forwardedRef, () => ({
		isOpen,
		setIsOpen
	}), [isOpen, setIsOpen])

	const handleCancel = useCallback(() => setIsOpen(false), [setIsOpen]);
	const handleDone = useCallback(() => {
		updateWatchList(internalWatchList)
		setIsOpen(false);
	}, [updateWatchList, internalWatchList]);

	return (
		<Modal
			open={isOpen}
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 200,
			}}
		>
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
				<Typography variant="h5" mb={4}>
					Add to Watch List
				</Typography>
				<CoinSuggestionList
					internalWatchList={internalWatchList}
					setInternalWatchList={setInternalWatchList}
				/>
				<Box
					mt={3}
					display="flex"
					justifyContent="flex-end"
				>
					<Button variant="outlined" onClick={handleCancel}>
						Cancel
					</Button>
					<Button
						variant="contained"
						sx={{
							marginLeft: theme => theme.spacing(2)
						}}
						onClick={handleDone}
					>
						Done
					</Button>
				</Box>
			</Paper>
		</Modal>
	)
}

const MemoizedAddToWatchListButtonModal = React.memo(AddToWatchListButtonModal);
export default React.forwardRef<ModalRef, Omit<AddToWatchListButtonModalProps, "forwardedRef">>((props, ref) => (
	<MemoizedAddToWatchListButtonModal forwardedRef={ref} {...props} />
));