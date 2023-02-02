import apiReducer, {initialState as apiInitialState, errorMessage, toggleLoading} from './apiReducer';
import itemReducer, {
	addItem,
	deleteItem,
	fetchAll,
	setSearch,
	updateItems,
	initialState,
} from './itemReducer';

const mockItem: Item = {
	id: 'mockId',
	description: 'mockDescription',
	checked: false,
	order: 0,
};

describe('tests for item reducer', () => {
	it('should return the initial state', () => {
		expect(itemReducer(undefined, { type: undefined })).toEqual(initialState);
	});

	it('fetchAll', () => {
		expect(
			itemReducer(
				initialState,
				fetchAll({items: [mockItem]})
			)
		).toEqual({
			...initialState,
			items:[mockItem],
		});
	});

	it('addItem', () => {
		const newItem = {
			id: 'mockId2',
			description: 'mockDescription2',
			checked: false,
			order: 1,
		};

		expect(
			itemReducer(
				{...initialState, items: [mockItem]},
				addItem({newItem})
			)
		).toEqual({...initialState, items: [mockItem, newItem] });
	});

	it('deleteItem', () => {
		expect(
			itemReducer(
				{...initialState, items: [mockItem]},
				deleteItem({id: 'mockId'})
			)
		).toEqual({...initialState, items: [] });
	});

	it('setSearch', () => {
		expect(
			itemReducer(
				initialState,
				setSearch({text: 'search text'})
			)
		).toEqual({...initialState, searchText: 'search text' });
	});

	it('updateItems', () => {
		const newItem = {
			id: 'mockId2',
			description: 'mockDescription2',
			checked: false,
			order: 1,
		};

		expect(
			itemReducer(
				{...initialState, items: [mockItem, newItem]},
				updateItems({items: [{...newItem, checked: true}]})
			)
		).toEqual({...initialState, items: [mockItem, {...newItem, checked: true}] });
	});
});

describe('tests for API reducer', () => {
	it('should return the initial state', () => {
		expect(apiReducer(undefined, { type: undefined })).toEqual(apiInitialState);
	});

	it('errorMessage', () => {
		expect(
			apiReducer(
				apiInitialState,
				errorMessage({message: 'Error'})
			)
		).toEqual({...apiInitialState, errorMessage: 'Error' });
	});

	it('toggleLoading', () => {
		expect(
			apiReducer(
				apiInitialState,
				toggleLoading({isLoading: true})
			)
		).toEqual({...apiInitialState, isLoading: true });
	});
});
