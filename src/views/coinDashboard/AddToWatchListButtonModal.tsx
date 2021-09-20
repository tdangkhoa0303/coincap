import React, {useCallback, useState} from 'react';
import CoinSuggestionList from './CoinSuggestionList';
import {useCoinsState} from '../CoinDashboard.hooks';
import {useUpdateWatchList} from './AddToWatchListButtonModal.hooks';
import {Modal} from 'components';

export type ModalRef = {
	isOpen: boolean,
	setIsOpen: (isOpen: boolean) => void
}

export interface AddToWatchListButtonModalProps {
	modalRef: React.RefObject<ModalRef>,
}

const AddToWatchListButtonModal: React.FC<AddToWatchListButtonModalProps> = (props) => {
	const {modalRef} = props;
	const {watchList: initialWatchList} = useCoinsState();
	const updateWatchList = useUpdateWatchList();
	const [internalWatchList, setInternalWatchList] = useState<number[]>(initialWatchList);

	const closeModal = useCallback(() => {
		if(modalRef.current) {
			modalRef.current.setIsOpen(false);
		}
	}, [])

	const handleDone = useCallback(() => {
		updateWatchList(internalWatchList)
		closeModal();
	}, [closeModal, updateWatchList, internalWatchList]);

	return (
		<Modal
			ref={modalRef}
			title="Add to Watch List"
			onPrimaryButtonClick={handleDone}
			onSecondaryButtonClick={closeModal}
		>
			<CoinSuggestionList
				internalWatchList={internalWatchList}
				setInternalWatchList={setInternalWatchList}
			/>
		</Modal>
	)
}

export default React.memo(AddToWatchListButtonModal);