import React from 'react';
// import image from "./img/card_photo_1.jpg";
// import image2 from "./img/pexels-francesco-ungaro-96444";
import image1 from "./img/right-arrow.png";
import data from './data';
import "./CardIndex.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
// import {<Link></Link>k} form "react-router-dom"

function Card() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
        <div className='wrapper w-4/5 mr-px'>
            <Slider {...settings}>
                {data.map((d, index) => (
                    <div className='relative overflow-hidden rounded-lg h-[400px] w-[400px] bg-gray-600 group' key={index}>
                        <img className='transition-transform group-hover:opacity-50 scale-110 inset-0 w-full h-full object-cover' src={d.images} alt={d.ques} />
                        <div className='absolute top-10 flex flex-col justify-start p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity'>
                            <h2 className='font-bold'>{d.ques}</h2>
                            <div className='para'>{d.ans}</div>
                        </div>
                        <div className='absolute bottom-0 left-0 right-0 p-8'>
                            <button className=' flex z-index h-9 w-24 rounded-lg font-medium my-1 mx-2 bg-white bg-opacity-75 hover:bg-gray-400'>
                                <Link to='/service' className='mx-2 mt-1' > Explore</Link>
                                <img src={image1} className='h-3 w-6  mt-3 mx-1 mr-2'></img>
                            </button>
                            
                        </div>
                    </div>
                ))}


            </Slider>
        </div>
    );
}

export default Card;
