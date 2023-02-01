import { useState } from 'react';
import { Alert, Button, Input } from '@mui/material';
import { Box } from '@mui/system';

interface Props {
	insertItem: (description: string) => void;
}

export const AddForm = ({ insertItem }: Props) => {
	const [description, setDescription] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e: any): void => {
		e.preventDefault();
		if (description === '') {
			setError('Please insert a description');

			return;
		}
		insertItem(description);
	};

	return (
		<form onSubmit={handleSubmit} style={{width: '100%'}}>
			<Box display='flex' flexDirection='column' rowGap={1}>
				<Box display='flex' columnGap={1}>
					<Input
						sx={{width: '90%'}}
						placeholder="Item"
						inputProps={{
							'aria-label': 'Description'
						}}
						onChange={(e: any): void => { setDescription(e.target.value); setError(''); }}
					/>

					<Button
						type="submit"
						variant="contained"
						color="primary"
					>
						Add
					</Button>
				</Box>
				{error && <Alert severity='error'>{error}</Alert>}
			</Box>
		</form>
	);

};
