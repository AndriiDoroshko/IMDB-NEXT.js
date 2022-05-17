//initialState / reducer.tsx
export interface InitialState {
    status: string;
    totalPage: number;
    currentPage: number;
    movie: Movie | {};
    cast: CastObg | {};
    rate: RateRequest | {};
    similarMovie: Array<MovieList>;
    movieList: Array<MovieList>;
    movieGenere?: GenreList | {};
    language: Array<SpokenLanguages> | [];
}
export interface RateRequest {
    success: boolean;
    status_code: number;
    status_message: string;
}

export interface CastObg {
    id: number;
    cast: Array<Cast>;
    crew: Array<Crew>;
}
export interface Cast {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: number;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}
export interface Crew {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
}
export interface MovieList {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<number>;
    genre_name?: Array<string>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface Movie {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: null | {};
    budget: number;
    genres: Array<Genre>;
    homepage: string | null;
    id?: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    production_companies: Array<ProductionCompanies>;
    production_countries: Array<ProductionCountries>;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Array<SpokenLanguages>;
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface Genre {
    id: number;
    name: string;
}

export interface GenreList {
    genres?: Array<Genre>;
}

export interface ProductionCompanies {
    name: string;
    id: number;
    logo_path: string | null;
    origin_country: string;
}

export interface ProductionCountries {
    iso_3166_1: string;
    name: string;
}

export interface SpokenLanguages {
    iso_639_1: string;
    english_name: string;
    name: string;
}
