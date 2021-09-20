import React, {ChangeEvent, useCallback, useMemo, useState} from 'react';
import {useCoinsState} from '../CoinDashboard.hooks';
import CoinSuggestionListItem from './CoinSuggestionListItem';
import TextField from '@mui/material/TextField';
import {useDebounce} from 'shared/hooks';
import {FixedSizeList as List} from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import Box from '@mui/material/Box';
import {ITEM_SIZE} from './CoinSuggestionList.constants.ts';


export interface CoinSuggestionListProps {
	internalWatchList: number[],
	setInternalWatchList:  React.Dispatch<React.SetStateAction<number[]>>,
}

const CoinSuggestionList: React.FC<CoinSuggestionListProps> = (props) => {
	const {internalWatchList, setInternalWatchList} = props;
	const {data: allCoins} = useCoinsState();
	const [searchText, setSearchText] = useState<string>('');
	const debouncedSearchText = useDebounce(searchText, 100);

	const handleSearchTextChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setSearchText(event.target.value)
	}, [setSearchText])

	const filteredItems = useMemo(() => {
		if(!debouncedSearchText) {
			return allCoins;
		}

		return allCoins.filter(coin => coin.name.toLowerCase().includes(debouncedSearchText.toLowerCase()));
	}, [allCoins, debouncedSearchText]);

	const rowRenderer = useCallback(({index, style}) => {
		const coinItem = filteredItems[index];
		const {id: itemId} = coinItem;

		return (
			<CoinSuggestionListItem
				key={itemId}
				style={style}
				item={coinItem}
				isInWatchList={internalWatchList.includes(itemId)}
				setInternalWatchList={setInternalWatchList}
			/>
		)
	}, [filteredItems, internalWatchList, setInternalWatchList])

	return (
		<>
			<TextField
				fullWidth={true}
				label="Coin name"
				value={searchText}
				onChange={handleSearchTextChange}
				placeholder="Search coin"
			/>
			<Box sx={{
				width: '100%',
				height: theme => theme.spacing(40),
				overflowY: 'auto',
				marginTop: theme => theme.spacing(2)
			}}>
				<AutoSizer>
					{({ height, width }) => (
						<List
							className="List"
							height={height}
							itemCount={filteredItems.length}
							itemSize={ITEM_SIZE}
							width={width}
						>
							{rowRenderer}
						</List>
					)}
				</AutoSizer>
			</Box>
		</>
	);
}

export default React.memo(CoinSuggestionList);