import { useState } from 'react';
import { Alert, Button, Input } from '@mui/material';
import { Box } from '@mui/system';

interface Props {
	onSubmit: (description: string) => void;
	onCancel?: () => void;
	initialState?: string;
}

export const ItemForm = ({ onSubmit, initialState, onCancel }: Props) => {
	const [description, setDescription] = useState(initialState ?? '');
	const [error, setError] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (description === '') {
			setError('Please insert a description');

			return;
		}
		onSubmit(description);
	};

	return (
		<form onSubmit={handleSubmit} style={{ width: '100%' }}>
			<Box display='flex' flexDirection='column' rowGap={1}>
				<Box display='flex' columnGap={1}>
					<Input
						sx={{ width: '90%' }}
						value={description ?? ''}
						placeholder="Item"
						inputProps={{
							'aria-label': 'Description'
						}}
						onChange={(e): void => { setDescription(e.target.value); setError(''); }}
					/>

					<Button
						type="submit"
						variant="contained"
						color="primary"
					>
						{initialState ? 'Edit' : 'Add'}
					</Button>

					{onCancel &&
						<Button
							type="button"
							variant="text"
							color="primary"
							onClick={onCancel}
						>
							Cancel
						</Button>
					}
				</Box>
				{error && <Alert severity='error'>{error}</Alert>}
			</Box>
		</form>
	);
};
