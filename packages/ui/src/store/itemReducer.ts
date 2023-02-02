import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

export const initialState = { items: [] as Item[], searchText: '' };

const itemStateSlice = createSlice({
	name: 'item',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<{ newItem: Item }>): void => {
			state.items = [...state.items, action.payload.newItem];
		},
		fetchAll: (state, action: PayloadAction<{ items: Item[] }>): void => {
			state.items = action.payload.items.sort((a, b) => a.order - b.order);
		},
		updateItems: (state, action: PayloadAction<{ items: Item[] }>): void => {
			const itemsToUpdate = action.payload.items;
			state.items = current(state.items)
				.map(
					(item) =>
						itemsToUpdate.find((itemToUpdate) => itemToUpdate.id === item.id) ??
            item
				)
				.sort((a, b) => a.order - b.order);
		},
		deleteItem: (state, action: PayloadAction<{ id: string }>): void => {
			state.items = current(state.items).filter(
				(item) => item.id !== action.payload.id
			);
		},
		setSearch: (state, action: PayloadAction<{ text: string }>): void => {
			state.searchText = action.payload.text;
		},
	},
});

export const { addItem, fetchAll, updateItems, deleteItem, setSearch } =
  itemStateSlice.actions;

export const selectItems = (state: RootState) => state.items.items;
export const selectSearchText = (state: RootState) => state.items.searchText;

export default itemStateSlice.reducer;
