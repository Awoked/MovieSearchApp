import React, { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
const Search = () => {

    const [movieList, setMovieList] = useState([]);
    const [showMovieList, setShowMovieList] = useState(false);
    const searchInput = useRef(null);
    const searchHandler = async (e) => {
        e.preventDefault();
        const baseUrl = "https://www.omdbapi.com/?apikey=d35db9b2&s=" + (searchInput.current.value != undefined ? searchInput.current.value : [] );
        const response = await fetch(baseUrl);
        const data = await response.json();
        console.log(data);
        setMovieList(data.Search);
        movieListShow();
    }

    const searchEventHandler = async (searchData) => {
        setTimeout(async () => {
            const baseUrl = "https://www.omdbapi.com/?apikey=d35db9b2&s=" + searchData;
            const response = await fetch(baseUrl);
            const data = await response.json();
            console.log(data);
            setMovieList(data.Search == undefined ? [] : data.Search);
            console.log( searchData);
            searchData == "" ? movieListHide() : movieListShow();
        }, 0);
        movieListShow();
    }
    const movieListHide = () => {
        setShowMovieList(false)
    }

    const movieListShow = () => {
        setShowMovieList(true)
    }

    return (
        <div className="search-bar w-full flex flex-col items-center justify-center relative max-w-md text-[#7c818a]">
            <form className="w-full flex justify-center" onSubmit={searchHandler}>
                <div className="input-wrapper  w-full ">
                    <label htmlFor="searchMovie" className="flex py-4 px-8 w-full  justify-between rounded-full bg-[#2c3443]">
                        <input type="text" id="searchMovie" className="bg-transparent w-full text-white outline-none" placeholder="Film Ara" ref={searchInput} onChange={e => searchEventHandler(e.target.value)} />
                        <button type="submit">
                            <BsSearch size={24} />
                        </button>
                    </label>
                </div>
            </form>
            <div className={(showMovieList ? " visible " : " invisible ") + "overflow-hidden search-result p-3 text-white max-h-96 overflow-y-auto rounded-md absolute top-16 z-50 bg-[#2c3443] w-full"}>
                <ul className="flex flex-col gap-3">
                    {
                        movieList.map((movie, index) => (
                            <li className="hover:opacity-70" key={index}>
                                <Link reloadDocument  to={"/moviedetail/" + movie.imdbID} className="flex gap-3 items-center">
                                    <div className="h-24 ">
                                        <img src={movie.Poster == "N/A" ? "https://picsum.photos/200/300" : movie.Poster} className="h-full" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h1 className="text-xl">
                                            {movie.Title}
                                        </h1>
                                        <h3>
                                            {movie.Year}
                                        </h3>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Search;