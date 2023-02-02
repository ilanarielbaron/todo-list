import { selectItems, selectSearchText } from '../../store/itemReducer';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useItems } from '../../hooks/useItems';
import { Box, Container } from '@mui/material';
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
	const { insertItem, removeItem, editItem } = useItems();
	const items = useAppSelector(selectItems);
	const searchText = useAppSelector(selectSearchText);

	const itemsToDisplay = searchText === '' ? items : items.filter(item => item.description.includes(searchText));

	return (
		<Container>
			<Box sx={styles.Paper}>
				<ItemForm onSubmit={insertItem} />
			</Box>
			<List
				items={itemsToDisplay}
				removeItem={removeItem}
				editItem={editItem}
			/>
		</Container>
	);
};

