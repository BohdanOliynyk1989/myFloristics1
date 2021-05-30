import React from "react";
import Slider from "react-slick";

import Progect1 from './Progect1';
import Progect2 from './Progect2';


export default function Progects({ id }) {

    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 5000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };  

    return ( 
    <div  id = { id } style={{width: '100%'}}>
      <Slider {...settings}>
        <div><Progect1 /></div>
        <div><Progect2 /></div>
      </Slider>
    </div>
    );
}