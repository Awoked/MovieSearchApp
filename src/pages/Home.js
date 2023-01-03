import React from "react";
import Hero from "../Components/Home/Hero";
import MovieSlide from "../Components/Home/MovieSlide";

const Home = () => {
    return (
        <main className="bg-[#020916]">
            <Hero 
            HeroSlideMovies={["Thor Love and", "Bird Box", "Avengers"]}
            />
            <MovieSlide
                SectionTitle="Popüler Filmler"
                SectionMovies={["The Godfather", "The Dark Knight ", "The Godfather Part II", "12 Angry Men", "The Lord of the Rings"]}
            />
            <MovieSlide
                SectionTitle="Yeni Fimler"
                SectionMovies={["Ready Player", "Men in Black: International", "Ad Astra", "Pirates of the Caribbean: At World's End", "Rampage"]}
            />
        </main>
    )
}

export default Home;