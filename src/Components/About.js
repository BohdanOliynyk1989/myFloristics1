import React from "react";
import { useMediaQuery } from 'react-responsive';
import Slider from "react-slick";

import img1 from '../assets/IMG_2021-02-04 16_41_47 2.png';
import img2 from '../assets/IMG_2021-02-04 16_41_53 2.png';

export default function About({ id }) {

const isBigScreen = useMediaQuery({ query: '(min-width: 790px)' })
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 790px)' })


const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };  


  return (
    <div className="wrapper">
      <div className="container">
        <div className="about_content" id={id}>
          {isBigScreen && <img src={img1} alt="about1" />}
          {isBigScreen &&  <img src={img2} alt="about2" />}          
          <div className="about_body">
            <div className="about_title">
              <p>Обо мне</p>
            </div>
            <div className="about_text">
              <p>Меня зовут - Юлия Виноградская,
                я профессиональный свадбеный флорист.
                Цветы для меня - это вдохновение, радость и моя жизнь. Я создаю свадебные букеты, которые отражают характер и индивидуальность невесты.  Учитываю все пожелания пары в цветочном дизайне, провожу через мир цветов и создаю незабываемую атмосферу, которую они запомнят на всю жизнь.</p>
            </div>
         
            {isTabletOrMobile && <div className="m_about_carousel">
              <Slider {...settings}>
                <div style={{margin: '0 auto'}}>
                  <img src={img1} alt="img 1"/>
                </div>
                <div style={{margin: '0 auto'}}>
                  <img src={img2} alt="img 2" /></div>
              </Slider>
            </div>} 
            </div>
        </div>
      </div>
    </div>



  )
}