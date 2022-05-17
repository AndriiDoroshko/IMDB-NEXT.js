export interface IProps {
    genre: Array<Genre>;
    putGenre: (gender: string) => void;
    takeDiscover: () => void;
}

interface Genre {
    id: number;
    name: string;
}
