import { useState } from 'react';
import { Button, Input } from '@mui/material';
import { Box } from '@mui/system';

export const SearchForm = () => {
	const [text, setText] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (text === '') {
			return;
		}
		//search
	};

	return (
		<form onSubmit={handleSubmit}>
			<Box display='flex' flexDirection='column' rowGap={1}>
				<Box display='flex' columnGap={1}>
					<Input
						placeholder="Item"
						inputProps={{
							'aria-label': 'Description'
						}}
						onChange={(e): void => { setText(e.target.value); }}
					/>

					<Button
						type="submit"
						variant="contained"
						color="primary"
					>
						Search
					</Button>
				</Box>
			</Box>
		</form>
	);
};
