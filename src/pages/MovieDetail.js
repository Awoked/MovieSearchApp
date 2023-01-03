import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HttpHelper from "../Api/HttpHelper";
import MovieSlide from "../Components/Home/MovieSlide";
import MovieDetailHero from "../Components/MovieDetail/MovieDetailHero";

const MovieDetail = () => {
    const params = useParams();
    const movieId = params.movieId;
    const [movieData, setMovieData] = useState([]);
    const get = async (DataUrl, setData) => {
        const baseUrl = "https://www.omdbapi.com/?apikey=d35db9b2&i=" + DataUrl;
        const response = await fetch(baseUrl);
        const data = await response.json();
        console.log(data);
        setData(data);
    }

    useEffect(() => {
        get(movieId, setMovieData);
    }, []);

    return (
        <main className="bg-[#020916]">
            <MovieDetailHero
                MovieData={movieData}
            />
            <MovieSlide
                SectionTitle="Diğer Filmler"
                SectionMovies={["Ready Player", "Men in Black: International", "Ad Astra", "Pirates of the Caribbean: At World's End", "Rampage"]}
            />
        </main>
    )
}

export default MovieDetail;