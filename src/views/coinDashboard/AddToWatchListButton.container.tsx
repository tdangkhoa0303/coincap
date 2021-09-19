import React, {useRef, useCallback} from 'react';
import AddToWatchListButtonView from './AddToWatchListButton.view';
import {ModalRef} from './AddToWatchListButtonModal';

const AddToWatchListButtonContainer: React.FC = () => {
	const modalRef = useRef<ModalRef>(null)

	const handleButtonClick = useCallback(() => {
		if(!modalRef.current) {
			return
		}

		modalRef.current.setIsOpen(true);
	}, [])

	return (
		<AddToWatchListButtonView modalRef={modalRef} onClick={handleButtonClick} />
	)
}

export default AddToWatchListButtonContainer;