import { Container } from '@mui/material';
import { Item } from '../Item';

interface Props {
  items: Item[]
}

export const List = ({ items }: Props) => {
	return (
		<Container maxWidth='sm'>
			{items.map(item => (
				<Item
					key={item.id}
					item={item}
					// deleteTodo={deleteTodo}
					// updateTodo={updateTodo}
				/>
			))}
		</Container>
	);
};
