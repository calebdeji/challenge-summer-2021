type Key = 'nominations' | 'data' | 'switch';

const storage = {
	save: (key: Key = 'nominations', value: { [key: string]: any }) => {
		window.localStorage.setItem(key, JSON.stringify(value));
	},
	get: (key: Key = 'nominations') => {
		const valueRetrieved = window.localStorage.getItem(key);
		if (valueRetrieved) {
			return JSON.parse(valueRetrieved);
		}
		return null;
	},
	delete: (key: Key = 'nominations') => {
		window.localStorage.removeItem(key);
	},
};

export default storage;
