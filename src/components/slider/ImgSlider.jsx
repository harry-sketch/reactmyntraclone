import React from 'react';
import "../slider/ImgSlider.css";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {
    let settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
    }
    return (
        <>
        
        <Slider {...settings} className="slider">
        <div className="wrap">
               <Link to="">
                   <img src="./img/slides/slide_1.jpg" alt="slide_1" />
               </Link>
        </div>
        <div className="wrap">
               <Link to="">
                   <img src="./img/slides/slide_2.jpg" alt="slide_2" />
               </Link>
        </div>
        <div className="wrap">
               <Link to="">
                   <img src="./img/slides/slide_3.jpg" alt="slide_3" />
               </Link>
        </div>
        <div className="wrap">
               <Link to="">
                   <img src="./img/slides/slide_4.jpg" alt="slide_4" />
               </Link>
        </div>
        <div className="wrap">
               <Link to="">
                   <img src="./img/slides/slide_5.jpg" alt="slide_4" />
               </Link>
        </div>
            
        </Slider>
    
        </>
    );
}

export default ImgSlider;
