import { DropResult } from 'react-beautiful-dnd';
import { Box, Container } from '@mui/material';
import { selectItems, selectSearchText } from '../../store/itemReducer';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useItems } from '../../hooks/useItems';
import { ItemForm } from '../ItemForm';
import { List } from '../List';

const styles = {
	Paper: {
		padding: 2,
		margin: '20px auto',
		textAlign: 'center',
	}
};

export const ListItems = () => {
	const { insertItem, removeItem, editItem, changeOrderItem } = useItems();
	const items = useAppSelector(selectItems);
	const searchText = useAppSelector(selectSearchText);


	const onDragEnd = ({ destination, draggableId }: DropResult) => {
		// dropped outside the list
		if (!destination || !draggableId) return;

		changeOrderItem(draggableId, destination.index);
	};

	const itemsToDisplay = searchText === '' ? items : items.filter(item => item.description.toLowerCase().includes(searchText.toLowerCase()));

	return (
		<Container>
			<Box sx={styles.Paper}>
				<ItemForm onSubmit={insertItem} />
			</Box>
			<List
				items={itemsToDisplay}
				removeItem={removeItem}
				editItem={editItem}
				onDragEnd={onDragEnd}
			/>
		</Container>
	);
};

