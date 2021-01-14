import { createContext, useEffect, useReducer } from 'react';
import { toast } from 'react-toastify';

import storage from 'libs/storage/storage';
import { MovieService } from 'api';
import { FetchMoviePayload, Movie } from 'api/movies/types';
import { AppContextProps } from './types';

type ReducerState = Omit<
	AppContextProps,
	'fetchMovies' | 'nominateMovie' | 'removeNominatedMovie' | 'clearNominatedMovies'
>;
interface ReducerAction {
	type:
		| 'fetch_movie_pending'
		| 'fetch_movie_fulfilled'
		| 'fetch_movie_error'
		| 'nominate_movie'
		| 'remove_nominated_movie'
		| 'clear_nominated_movie';
	payload?: any;
}

const INITIAL_STATE: ReducerState = {
	status: 'idle',
	data: null,
	nominatedData: storage.get('nominations') || {},
	error: null,
};

const AppContext = createContext<AppContextProps>({
	...INITIAL_STATE,
	fetchMovies: (_: FetchMoviePayload) => {},
	nominateMovie: (_: Movie) => {},
	removeNominatedMovie: (_: Movie) => {},
	clearNominatedMovies: () => {},
});

const reducer = (state: ReducerState = INITIAL_STATE, action: ReducerAction): ReducerState => {
	switch (action.type) {
		case 'fetch_movie_pending':
			return {
				...state,
				status: 'fetching',
				error: null,
			};

		case 'fetch_movie_error':
			return {
				...state,
				status: 'error',
				error: action.payload,
			};

		case 'fetch_movie_fulfilled':
			return {
				...state,
				status: 'fetched',
				error: null,
				data: action.payload,
			};

		case 'nominate_movie': {
			const maximumNumberOfNominatedMovies = 5;
			if (
				state.nominatedData &&
				Object.values(state.nominatedData).length === maximumNumberOfNominatedMovies
			) {
				toast.success('Maximum number of nominated list exceeded');
				return state;
			}

			return {
				...state,
				nominatedData: { [action.payload.Title]: action.payload, ...state.nominatedData },
			};
		}

		case 'remove_nominated_movie': {
			const nominatedData = state.nominatedData;
			if (nominatedData) {
				delete nominatedData[action.payload.Title];
			}
			return {
				...state,
				nominatedData,
			};
		}

		case 'clear_nominated_movie':
			return {
				...state,
				nominatedData: {},
			};

		default:
			return state;
	}
};

export const useAppContext = (): AppContextProps => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
	const nominatedDataLength = Object.values(state.nominatedData || {}).length;

	useEffect(() => {
		if (state.nominatedData) {
			storage.save('nominations', state.nominatedData);
		}
	}, [state.nominatedData, nominatedDataLength]);

	const fetchMovies = async (payload: FetchMoviePayload) => {
		try {
			dispatch({ type: 'fetch_movie_pending' });
			const response = await MovieService.fetchMovies(payload);
			dispatch({ type: 'fetch_movie_fulfilled', payload: response });
		} catch (error) {
			dispatch({ type: 'fetch_movie_error', payload: error.message });
		}
	};

	const nominateMovie = (payload: Movie) => {
		dispatch({ type: 'nominate_movie', payload });
	};

	const removeNominatedMovie = (payload: Movie) => {
		dispatch({ type: 'remove_nominated_movie', payload });
		toast.success(`${payload.Title} successfully removed from nomination list`);
	};

	const clearNominatedMovies = () => {
		dispatch({ type: 'clear_nominated_movie' });
		toast.success('Cleared all nominated movies');
	};

	return {
		fetchMovies,
		nominateMovie,
		removeNominatedMovie,
		clearNominatedMovies,
		...state,
	};
};

export default AppContext;
