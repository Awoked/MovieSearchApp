import React from "react";
import { FaImdb } from "react-icons/fa";
const MovieDetailHero = ({ MovieData }) => {

    

    return (
        <section className="hero-section text-white" style={{ backgroundImage: "url(" + MovieData.Poster + ")" }}>
            <div className="hero-wrapper bg-[#242424cb] backdrop-blur-md">
                <div className="container mx-auto h-full">
                    <div className="hero-inner h-full px-8 lg:px-0 py-14 lg:py-24 flex lg:flex-row flex-col gap-12 lg:gap-16">
                        <div className="">
                            <img className="rounded-md w-[500px] h-full" src={MovieData.Poster} alt={MovieData.Title} />
                        </div>
                        <div className="py-4 lg:py-12 flex flex-col gap-6 md:gap-8">
                            <div className="flex justify-between items-center">
                                <h1 className="text-5xl md:text-6xl font-bold">
                                    {MovieData.Title}
                                </h1>
                                <h1 className="flex items-center gap-1 md:gap-3 text-4xl md:text-5xl font-bold">
                                    <FaImdb size={48} className="text-yellow-400" />
                                    <span>
                                        {MovieData.imdbRating}
                                    </span>
                                </h1>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold">{MovieData.Actors}</h3>
                            <p className="text-lg md:text-xl max-w-4xl">
                                {MovieData.Plot}
                            </p>
                            <div className="flex flex-col lg:flex-row  justify-between">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col lg:flex-row  lg:gap-3 items-start lg:items-end">
                                        <span className="text-2xl font-bold">Yazar:</span>
                                        <p className="text-xl">
                                            {MovieData.Writer}
                                        </p>
                                    </div>
                                    <div className="flex flex-col lg:flex-row  lg:gap-3 items-start lg:items-end">
                                        <span className="text-2xl font-bold">Yayınlanma Tarihi:</span>
                                        <p className="text-xl">
                                            {MovieData.Released}
                                        </p>
                                    </div>
                                    <div className="flex flex-col lg:flex-row  lg:gap-3 items-start lg:items-end">
                                        <span className="text-2xl font-bold">Filmin Süresi:</span>
                                        <p className="text-xl">
                                            {MovieData.Runtime}
                                        </p>
                                    </div>
                                    <h3 className="text-2xl font-bold">
                                        Gelir: <span className="text-green-600">{MovieData.BoxOffice}</span>
                                    </h3>
                                </div>
                                <div className="items-end text-end flex flex-col gap-2">
                                    <h1 className="text-2xl font-bold">Kategori</h1>
                                    <span className="w-3/4 h-0.5 bg-white"></span>
                                    <p className="text-xl w-3/4 text-red-500">
                                        {MovieData.Genre}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieDetailHero;