import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { SearchForm } from '../SearchForm';

const styles = {
	Search: {
		margin: '20px auto',
		px: 2,
		py: 1,
		justifyContent: 'flex-end',
		display: 'flex',
	}
};

export const Header = () => (
	<AppBar
		position='static'
		color='default'
		elevation={0}
		sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
	>
		<Toolbar sx={{ flexWrap: 'wrap' }}>
			<Typography variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
        TODO LIST
			</Typography>

			<Box sx={styles.Search} >
				<SearchForm />
			</Box>
		</Toolbar>
	</AppBar>
);
