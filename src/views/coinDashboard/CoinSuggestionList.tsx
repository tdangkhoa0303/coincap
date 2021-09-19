import React, {ChangeEvent, useCallback, useMemo, useState} from 'react';
import List from '@mui/material/List';
import {useCoinsState} from '../CoinDashboard.hooks';
import CoinSuggestionListItem from './CoinSuggestionListItem';
import TextField from '@mui/material/TextField';
import {useDebounce} from 'shared/hooks';

export interface CoinSuggestionListProps {
	internalWatchList: number[],
	setInternalWatchList:  React.Dispatch<React.SetStateAction<number[]>>,
}

const CoinSuggestionList: React.FC<CoinSuggestionListProps> = (props) => {
	const {internalWatchList, setInternalWatchList} = props;
	const {data: allCoins} = useCoinsState();
	const [searchText, setSearchText] = useState<string>('');
	const debouncedSearchText = useDebounce(searchText, 300);

	const handleSearchTextChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setSearchText(event.target.value)
	}, [setSearchText])

	const filteredItem = useMemo(() => {
		if(!debouncedSearchText) {
			return allCoins.slice(0, 100);
		}

		return allCoins.filter(coin => coin.name.toLowerCase().includes(debouncedSearchText.toLowerCase()));
	}, [allCoins, debouncedSearchText]);

	return (
		<>
			<TextField
				fullWidth={true}
				label="Coin name"
				value={searchText}
				onChange={handleSearchTextChange}
				placeholder="Search coin"
			/>
			<List sx={{
				width: '100%',
				minHeight: theme => theme.spacing(40),
				maxHeight: theme => theme.spacing(40),
				overflowY: 'auto',
				marginTop: theme => theme.spacing(2)
			}}>
				{filteredItem.map((coinItem) => {
					const {id: itemId} = coinItem;

					return (
						<CoinSuggestionListItem
							key={itemId}
							item={coinItem}
							isInWatchList={internalWatchList.includes(itemId)}
							setInternalWatchList={setInternalWatchList}
						/>
					)
				})}
			</List>
		</>
	);
}

export default React.memo(CoinSuggestionList);