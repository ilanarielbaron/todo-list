import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

export const initialState = [] as Item[];

const itemStateSlice = createSlice({
	name: 'item',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<{ newItem: Item }>): void => {
			state = [...state, action.payload.newItem];
		},
		fetchAll: (state, action: PayloadAction<{ items: Item[] }>): void => {
			state = action.payload.items;
		},
		toggleChecked: (state, action: PayloadAction<{ id: string }>): void => {
			state = state.map(item => item.id === action.payload.id ? ({...item, checked: !item.checked}) : item);
		},
		updateItems: (state, action: PayloadAction<{ items: Item[] }>): void => {
			const itemsToUpdate = action.payload.items;
			state = state.map(
				(item) =>
					itemsToUpdate.find((itemToUpdate) => itemToUpdate.id === item.id) ??
          item
			);
		},
	},
});

export const { addItem, fetchAll, updateItems, toggleChecked } = itemStateSlice.actions;

export const selectItems = (state: RootState) => state.items;

export default itemStateSlice.reducer;
