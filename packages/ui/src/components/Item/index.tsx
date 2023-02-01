import { Build, Delete } from '@mui/icons-material';
import { Grid, IconButton, Paper } from '@mui/material';

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
	}
};

interface Props {
  item: Item;
}

export const Item = ({ item }: Props) => {
	const onDelete = () => {
		//deleteItem(item.id)
	};

	return (
		<Grid
			xs={12}
			item
		>
			<Paper elevation={2} style={styles.Paper}>
				<span>{item.description}</span>
				<IconButton
					color="primary"
					aria-label="Edit"
					sx={styles.Icon}
					//onClick={() => this.props.updateTodo(this.props.index)}
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
			</Paper>
		</Grid>
	);
};
