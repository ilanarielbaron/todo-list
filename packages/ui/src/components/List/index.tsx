import { Container } from '@mui/material';
import { Item } from '../Item';

interface Props {
	items: Item[]
	removeItem: (id: string) => void;
	editItem: (item: Partial<Item>) => void;
}

export const List = ({ items, removeItem, editItem }: Props) => {
	return (
		<Container maxWidth='sm'>
			{items.map(item => (
				<Item
					key={item.id}
					item={item}
					removeItem={removeItem}
					editItem={editItem}
				/>
			))}
		</Container>
	);
};
