import React from "react";
import { useTranslation } from "react-i18next";
import MainLayout from "src/components/MainLayout/MainLayout";
import MovieCard from "../Card";
import Spiner from "src/components/Spiner";
import STPagination from "src/components/Pagination/";
import { IProps } from "./type";
import { STMain } from "./styled";

const List: React.FC<IProps> = ({ movies, spiner }) => {
    const { t } = useTranslation();
    return (
        <MainLayout title={t("movie")}>
            <STMain>
                {spiner ? (
                    <Spiner />
                ) : (
                    movies.map((movie) => (
                        <MovieCard key={movie.id} {...movie} />
                    ))
                )}
            </STMain>
            <STPagination />
        </MainLayout>
    );
};

export default List;
