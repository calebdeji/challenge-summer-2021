const apiKey = process.env.REACT_APP_API_KEY;
const identityKey = process.env.REACT_APP_API_IDENTITY_KEY;

const request = (endpoint?: string, customConfig?: RequestInit) => {
	const url = `${process.env.REACT_APP_API_URL}${endpoint}&apiKey=${apiKey}&i=${identityKey}`;
	return window.fetch(url, customConfig);
};

export default request;
