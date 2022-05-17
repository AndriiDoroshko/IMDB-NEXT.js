export interface IMovie {
    movie: {
        adult: boolean;
        backdrop_path: string | null;
        belongs_to_collection: null | {};
        budget: number;
        genres: Array<Genre>;
        homepage: string | null;
        id: number;
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
    };
}

export interface Genre {
    id: number;
    name: string;
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
    name: string;
}
