import { selectItems } from '../../store/itemReducer';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useItems } from '../../hooks/useItems';
import { Box, Container } from '@mui/material';
import { AddForm } from '../AddForm';
import { List } from '../List';

const styles = {
	Paper: {
		padding: 2,
		margin: '20px auto',
		textAlign: 'center',
	}
};

export const ListItems = () => {
	const { insertItem } = useItems();
	const items = useAppSelector(selectItems);

	return (
		<Container>
			<Box sx={styles.Paper}>
				<AddForm insertItem={insertItem} />
			</Box>
			<List
				items={items}
			/>
		</Container>
	);
};

