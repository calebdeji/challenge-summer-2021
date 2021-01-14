import qs from 'query-string';

import request from 'api/request';
import { FetchMoviePayload, FetchMovieResponse } from './types';

const fetchMovies = (payload: FetchMoviePayload): Promise<FetchMovieResponse> => {
	const query = qs.stringify(payload);
	return request(`?${query}`).then((res) => res.json());
};

const movieService = {
	fetchMovies,
};

export default movieService;
