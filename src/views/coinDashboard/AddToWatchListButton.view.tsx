import React from 'react';
import Button from '@mui/material/Button';
import AddToWatchListButtonModal, {ModalRef} from './AddToWatchListButtonModal';

export interface AddToWatchListButtonViewProps {
	onClick: VoidFunction,
	modalRef: React.RefObject<ModalRef>
}

const AddToWatchListButtonView: React.FC<AddToWatchListButtonViewProps> = (props) => {
	const {onClick, modalRef} = props;

	return (
		<>
			<Button
				variant="outlined"
				onClick={onClick}
			>
				ADD TO WATCH LIST
			</Button>
			<AddToWatchListButtonModal modalRef={modalRef} />
		</>
	)
}

export default React.memo(AddToWatchListButtonView);