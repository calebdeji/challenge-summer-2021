export interface Movie {
	Title: string;
	Year: string;
}

export interface FetchMovieResponse {
	Response: string;
	Search?: Array<Movie>;
	totalResults?: number;
}

export interface FetchMoviePayload {
	s?: string;
	page?: number;
}
