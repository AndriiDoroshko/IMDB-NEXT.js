export interface TPMovieView {
    vote_average: number;
    vote_count: number;
    title: string;
    overview: string;
    genre_name?: Array<Genre | {}>;
}

export interface Genre {
    id: number;
    name: string;
}
