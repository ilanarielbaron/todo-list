import { changeOrderAPI, createItemAPI, editItemAPI, removeItemAPI } from '../api';
import { toggleLoading } from '../store/apiReducer';
import { addItem, deleteItem, updateItems } from '../store/itemReducer';
import { useAppDispatch } from './useAppDispatch';

export const useItems = () => {
	const dispatch = useAppDispatch();

	const callAPI = async (action: () => Promise<void>) => {
		dispatch(toggleLoading({ isLoading: true }));
		await action();
		dispatch(toggleLoading({ isLoading: false }));
	};

	const insertItem = async (description: string): Promise<void> => {
		callAPI(async () => {
			const response = await createItemAPI(description);
			if (response) {
				dispatch(addItem({ newItem: response }));
			}
		});
	};

	const removeItem = async (id: string): Promise<void> => {
		callAPI(async () => {
			const response = await removeItemAPI(id);
			if (response) {
				dispatch(deleteItem({ id }));
				dispatch(updateItems({ items: response }));
			}
		});
	};

	const editItem = async (item: Partial<Item>): Promise<void> => {
		callAPI(async () => {
			const response = await editItemAPI(item);
			if (response) {
				dispatch(updateItems({ items: [response] }));
			}
		});
	};


	const changeOrderItem = async (id: string, newOrder: number): Promise<void> => {
		callAPI(async () => {
			const response = await changeOrderAPI(id, newOrder);
			if (response) {
				dispatch(updateItems({ items: response }));
			}
		});
	};

	return { insertItem, removeItem , editItem, changeOrderItem };
};
