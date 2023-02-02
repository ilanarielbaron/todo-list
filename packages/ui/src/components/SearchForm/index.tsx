import { IconButton, Input } from '@mui/material';
import { Box } from '@mui/system';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setSearch } from '../../store/itemReducer';
import { CancelOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';

export const SearchForm = () => {
	const [text, setText] = useState('');
	const dispatch = useAppDispatch();

	const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		setText(e.target.value);
	};

	useEffect(() => {
		dispatch(setSearch({ text }));
	}, [text]);

	return (
		<Box display='flex' flexDirection='column' rowGap={1}>
			<Box display='flex' columnGap={1}>
				<Input
					placeholder="Search"
					inputProps={{
						'aria-label': 'Description'
					}}
					onChange={onChange}
					value={text ?? ''}
				/>
				<IconButton
					sx={{ left: -10 }}
					color="default"
					aria-label="Edit"
					onClick={() => { setText(''); }}
				>
					<CancelOutlined fontSize="small" />
				</IconButton>
			</Box>
		</Box>
	);
};
