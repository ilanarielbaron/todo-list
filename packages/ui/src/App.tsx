import RoutesComponent from './components/Routes';
import Layout from './components/Layout';
import { useEffect } from 'react';
import { fetchItems } from './api';
import { fetchAll } from './store/itemReducer';
import { useAppDispatch } from './hooks/useAppDispatch';
import { errorMessage, toggleLoading } from './store/apiReducer';

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const fetchAllItems = async () => {
			dispatch(toggleLoading({ isLoading: true }));
			const allItems = await fetchItems();
			dispatch(toggleLoading({ isLoading: false }));

			if (!allItems) {
				dispatch(errorMessage({ message: 'There is an error when fetching the list' }));
			}

			if (allItems && allItems.length > 0) {
				dispatch(fetchAll({ items: allItems }));
			}
		};

		fetchAllItems();
	}, [dispatch]);

	return (
		<Layout>
			<RoutesComponent />
		</Layout>
	);
}

export default App;
