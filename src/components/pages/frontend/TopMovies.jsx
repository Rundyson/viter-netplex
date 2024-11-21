import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MoviesItem from './MoviesItem';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const TopMovies = () => {
    const moviesArray = [
        {
            img: "top-movies-1.png",
        },
        {
            img: "top-movies-2.png",
        },
        {
            img: "top-movies-3.png",
        },
        {
            img: "top-movies-4.png",
        },
        {
            img: "top-movies-5.png",
        },
        {
            img: "top-movies-6.png",
        },
        {
            img: "top-movies-7.png",
        },
        {
            img: "top-movies-8.png",
        },

    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 1500,
        autoplay: true,
      };
      
  return (
    <section className="bg-black py-20 ">
        <div className="nav flex justify-between px-6">
            <h2 className="text-white mb-3">Top Movies</h2>
            <div className="right flex">
                <ChevronLeft color='white' size={30}/>
                <ChevronRight color='white' size={30}/>
            </div>
            </div>
        
            <Slider {...settings}>
            {moviesArray.map((item, key) => (
                <MoviesItem item={item} key={key}/>
            ))}
            </Slider>

    </section>
  )
}

export default TopMovies