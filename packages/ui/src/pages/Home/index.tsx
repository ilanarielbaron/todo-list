import { Alert } from '@mui/material';
import { ListItems } from '../../components/ListItems';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectErrorMessage } from '../../store/apiReducer';

const Home = () => {
	const error = useAppSelector(selectErrorMessage);
	
	if (error) return <Alert severity='error'>{error}</Alert>;

	return <>{<ListItems />}</>;
};

export default Home;
