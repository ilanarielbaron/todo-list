import { Build, Delete } from '@mui/icons-material';
import { Checkbox, Grid, IconButton, Paper } from '@mui/material';
import { useState } from 'react';
import { ItemForm } from '../ItemForm';

const styles = {
	Icon: {
		marginLeft: 'auto'
	},
	Paper: {
		margin: 'auto',
		padding: 10,
		display: 'flex',
		alignItems: 'center',
		marginTop: 10,
	},
	CheckBox: {
		marginRight: 2,
	}
};

interface Props {
	item: Item;
	removeItem: (id: string) => void;
	editItem: (item: Partial<Item>) => void;
}

export const Item = ({ item, removeItem, editItem }: Props) => {
	const [isEditing, setIsEditing] = useState(false);
	const onDelete = () => {
		removeItem(item.id);
	};
	const onEditDescription = (description: string) => {
		editItem({ ...item, description });
	};
	const onToggleChecked = () => {
		editItem({ ...item, checked: !item.checked });
	};

	const descriptionStyle = {
		...(item.checked && { textDecoration: 'line-through' })
	};

	return (
		<Grid
			xs={12}
			item
		>
			<Paper elevation={2} style={styles.Paper}>
				{isEditing ?
					<ItemForm onSubmit={onEditDescription} initialState={item.description} onCancel={(): void => { setIsEditing(false); }} />
					: (
						<>
							<Checkbox sx={styles.CheckBox} checked={item.checked} onChange={onToggleChecked} />
							<span style={descriptionStyle}>{item.description}</span>
							<IconButton
								color="primary"
								aria-label="Edit"
								sx={styles.Icon}
								onClick={() => setIsEditing(true)}
							>
								<Build fontSize="small" />
							</IconButton>
							<IconButton
								color="secondary"
								aria-label="Delete"
								onClick={onDelete}
							>
								<Delete fontSize="small" />
							</IconButton>
						</>
					)}
			</Paper>
		</Grid>
	);
};
