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

export const createItem = async (description: string): Promise<string> => {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			description,
		}),
	};
	const response = await fetch(BASE_URL, requestOptions).then((data) =>
		data.json()
	);

	return response;
};
