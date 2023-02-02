import { DragDropContext, Droppable, OnDragEndResponder } from 'react-beautiful-dnd';
import { Container } from '@mui/material';
import { Item } from '../Item';

interface Props {
	items: Item[]
	removeItem: (id: string) => void;
	editItem: (item: Partial<Item>) => void;
	onDragEnd: OnDragEndResponder;
}

export const List = ({ items, removeItem, editItem, onDragEnd }: Props) => {
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="droppable-list">
				{provided => (
					<Container maxWidth='sm' ref={provided.innerRef} {...provided.droppableProps}>
						{items.map(item => (
							<Item
								key={item.id}
								item={item}
								removeItem={removeItem}
								editItem={editItem}
							/>
						))}
						{provided.placeholder}
					</Container>
				)}
			</Droppable>
		</DragDropContext >
	);
};
