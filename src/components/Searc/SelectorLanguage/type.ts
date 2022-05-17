export interface IProps {
    language: Array<Lang>;
    putLanguage: (lang: string) => void;
    takeDiscover: () => void;
}

interface Lang {
    iso_639_1: string;
    english_name: string;
    name: string;
}
