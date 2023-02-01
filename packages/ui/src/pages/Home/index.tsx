import { Alert, CircularProgress } from '@mui/material';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectErrorMessage, selectIsLoading } from '../../store/apiReducer';

const Home = () => {
	const error = useAppSelector(selectErrorMessage);
	const isLoading = useAppSelector(selectIsLoading);

	if (error) return <Alert severity='error'>{error}</Alert>;

	if (isLoading) return <CircularProgress sx={{ marginTop: 5 }} />;

	return <>{<h1> LIST </h1>}</>;
};

export default Home;
