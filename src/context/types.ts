import { FetchMoviePayload, FetchMovieResponse, Movie } from 'api/movies/types';

export type StatusType = 'idle' | 'fetching' | 'fetched' | 'error';

export interface AppContextProps {
	status: StatusType;
	data: FetchMovieResponse | null;
	nominatedData: { [key: string]: Movie } | null;
	error: string | null;
	fetchMovies: (_: FetchMoviePayload) => void;
	nominateMovie: (_: Movie) => void;
	removeNominatedMovie: (_: Movie) => void;
	clearNominatedMovies: () => void;
}
