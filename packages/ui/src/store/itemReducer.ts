import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

export const initialState = {items: [] as Item[]};

const itemStateSlice = createSlice({
	name: 'item',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<{ newItem: Item }>): void => {
			state.items = [...state.items, action.payload.newItem];
		},
		fetchAll: (state, action: PayloadAction<{ items: Item[] }>): void => {
			console.log(action.payload.items);
			state.items = action.payload.items;
		},
		toggleChecked: (state, action: PayloadAction<{ id: string }>): void => {
			state.items = state.items.map((item) =>
				item.id === action.payload.id
					? { ...item, checked: !item.checked }
					: item
			);
		},
		updateItems: (state, action: PayloadAction<{ items: Item[] }>): void => {
			const itemsToUpdate = action.payload.items;
			state.items = state.items.map(
				(item) =>
					itemsToUpdate.find((itemToUpdate) => itemToUpdate.id === item.id) ??
          item
			);
		},
	},
});

export const { addItem, fetchAll, updateItems, toggleChecked } =
  itemStateSlice.actions;

export const selectItems = (state: RootState) => state.items.items;

export default itemStateSlice.reducer;
