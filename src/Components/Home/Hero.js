import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HttpHelper from "../../Api/HttpHelper";
import { Autoplay, Pagination } from "swiper";
import 'swiper/css';
import { AiOutlinePlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Hero = ({ HeroSlideMovies }) => {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const MovieNames = HeroSlideMovies;
        const Data = [];
        MovieNames.forEach((Name) => {
            HttpHelper().getFromTitle(Name, Data)
        })
        setTimeout(() => {
            setMovies(Data)
        }, 2000);
    }, []);

    return (
        <section className="hero w-full text-[#eeeeee] py-8">
            <Swiper
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1.2}
                initialSlide="3"
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
                modules={[Autoplay, Pagination]}
                className="HeroSwiper"
            >
                {
                    movies.map((movie, index) => (
                        <SwiperSlide key={index} className="">
                            <Link reloadDocument to={"/moviedetail/" + movie.imdbID}>
                                <div className="slide-item relative">
                                    <div className="w-full before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#24242495] before:backdrop-blur-sm">
                                        <img src={movie.Poster} className="w-full" alt="" />
                                    </div>
                                    <div className="text-white  slide-content flex flex-col gap-4 absolute left-[5%]">
                                        <h1 className="font-bold text-6xl">
                                            {movie.Title}
                                        </h1>
                                        <h3 className="font-medium text-2xl">
                                            Yapım Yılı - {movie.Year}
                                        </h3>
                                        <h3 className="text-[#b5b7c0] text-xl"> Film Süresi - {movie.Runtime}</h3>
                                        <Link to={"/"} className="flex text-xl gap-3 items-center">
                                            <AiOutlinePlayCircle size={38} />
                                            <span className="text-[#b5b7c0] font-semibold">Fragmanı izle</span>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default Hero;