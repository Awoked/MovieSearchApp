import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/autoplay";
import HttpHelper from "../../Api/HttpHelper";
import { Link } from "react-router-dom";
const MovieSlide = ({ SectionTitle, SectionMovies }) => {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const MovieNames = SectionMovies;
        const Data = [];
        MovieNames.forEach((Name) => {
            HttpHelper().getFromTitle(Name, Data)
        })
        setTimeout(() => {
            setMovies(Data)
        }, 2000);
    }, []);

    return (
        <section className="movies py-8 text-white">

            <div className="container px-4 md:px-0 mx-auto">
                <div className="flex justify-between">
                    <h1 className="text-2xl xl:text-3xl 2xl:text-4xl pb-8 font-semibold">
                        {SectionTitle}
                    </h1>
                </div>
            </div>
            <div className="moive-slider-wrapper">
                <Swiper

                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320:{
                            slidesPerView: 2.1
                        },
                        768:{
                            slidesPerView: 3.1
                        },
                        
                        1024:{
                            slidesPerView: 6.1
                        }


                    }}

                    spaceBetween={45}
                    centeredSlides={true}
                    loop={true}
                    modules={[Autoplay, Pagination]}
                    className="MovieSwiper"
                >
                    {
                        movies.map((movie, index) => (
                            <SwiperSlide key={index}>
                                <Link reloadDocument to={"/moviedetail/"+movie.imdbID}>
                                    <div className="slide-item rounded-md overflow-hidden">
                                        <img src={movie.Poster} className="w-full" alt="" />
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default MovieSlide;