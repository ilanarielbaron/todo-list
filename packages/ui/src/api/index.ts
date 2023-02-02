const BASE_URL = 'http://localhost:8000/items';

interface FetchAPIInput {
  fetchURL: string;
  options: {
    method: string;
  };
}

const fetchAPI = async ({ fetchURL, options }: FetchAPIInput) => {
	const response = await fetch(fetchURL, options).then((data) => data.json());
	if (!response) return null;

	return response;
};

export const fetchItems = async (): Promise<Item[] | null> => {
	const requestOptions = {
		method: 'GET',
	};

	try {
		const response = await fetchAPI({
			fetchURL: BASE_URL,
			options: requestOptions,
		});
		if (!response.data?.allItems) {
			return null;
		}

		return await response.data.allItems;
	} catch (error: unknown) {
		return null;
	}
};

export const createItemAPI = async (description: string): Promise<Item | null> => {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			description,
		}),
	};

	try {
		const response = await fetch(BASE_URL, requestOptions).then((data) =>
			data.json()
		);

		if(!response.data?.newItem) return null;

		return response.data.newItem;
	} catch (error: unknown) {
		return null;
	}
};


export const removeItemAPI = async (id: string): Promise<Item[] | null> => {
	const requestOptions = {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			id,
		}),
	};

	try {
		const response = await fetch(BASE_URL, requestOptions).then((data) =>
			data.json()
		);

		if(!response.data?.items) return null;

		return response.data.items;
	} catch (error: unknown) {
		return null;
	}
};


export const editItemAPI = async (item: Partial<Item>): Promise<Item | null> => {
	const requestOptions = {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			...item,
		}),
	};

	try {
		const response = await fetch(BASE_URL, requestOptions).then((data) =>
			data.json()
		);

		if(!response.data?.item) return null;

		return response.data.item;
	} catch (error: unknown) {
		return null;
	}
};
