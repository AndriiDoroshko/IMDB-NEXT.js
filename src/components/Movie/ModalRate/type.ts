import { RateRequest } from "src/typescript/movieRedux";

export interface IPostRate {
    sendRate: (number: number) => void;
    deleteRate: (id: number) => void;
    rateStatus: RateRequest;
    spinner: boolean;
    id: number;
}
