import React, {useCallback} from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import {Coin} from 'shared/models/Coin';

export interface CoinSuggestionListItemProps {
	isInWatchList: boolean
	setInternalWatchList:  React.Dispatch<React.SetStateAction<number[]>>,
	item: Coin,
	style?: React.CSSProperties,
}

const CoinSuggestionListItem: React.FC<CoinSuggestionListItemProps> = (props) => {
	const {isInWatchList, setInternalWatchList, item, style} = props;
	const {id: itemId, name, cmc_rank: rank} = item

	const handleSuggestionClick = useCallback(() => {
		setInternalWatchList(previousIds => {
			if(isInWatchList) {
				return previousIds.filter(id => id !== itemId)
			}

			return [
				...previousIds,
				itemId
			]
		})
	}, [isInWatchList, itemId, setInternalWatchList])

	return (
		<ListItem
			style={style}
			disablePadding={true}
			key={itemId}
			secondaryAction={
				<IconButton edge="end" onClick={handleSuggestionClick}>
					{isInWatchList ? (
						<DeleteIcon />
					) : (
						<AddIcon />
					)}
				</IconButton>
			}
		>
			<ListItemButton>
				<ListItemIcon>
					<Typography>{rank}</Typography>
				</ListItemIcon>
				<ListItemText primary={name} />
			</ListItemButton>
		</ListItem>
	);
}

export default React.memo(CoinSuggestionListItem);