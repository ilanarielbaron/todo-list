import { toggleLoading } from '../store/apiReducer';
import { useAppDispatch } from './useAppDispatch';

export const useItems = () => {
	const dispatch = useAppDispatch();

	const insertItem = (description: string): void => {
		dispatch(toggleLoading({ isLoading: true }));
		console.log('insert');
	};

	return { insertItem };
};
