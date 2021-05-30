import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useMediaQuery } from 'react-responsive';
import Menu from './Menu/Menu';
import Slider from "react-slick";



import soc_fb from '../assets/icons8-facebook-500.png';
import soc_inst from '../assets/icons8-instagram-500.png';
import soc_tel from '../assets/Vector.png';
import logo from '../assets/Vinogradskaya floristics.png';
import header_tel from '../assets/icons8-phone-100.png';
import header_cont_1 from '../assets/200158300768_11311758350551645215 1.png';
import header_cont_2 from '../assets/calderwood-and-rose-bouquet-1163b28 1.png';
import header_cont_3 from '../assets/200109300339_9785081400993120652.png';


export default function Header(){
  const scrollToTop1 = () => {
    scroll.scrollToTop();
  };
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
      <>
        {isBigScreen && <div className="wrapper">
          <div className="container">
            <div className="header_content">
              <div className="header_social">
                <a  href="https://uk-ua.facebook.com/" target="_blank" rel="noreferrer">
                  <img src={soc_fb} alt='facebook' />
                </a >
                <a  href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  <img src={soc_inst} alt='instagram' />
                </a >
                <a  href="https://web.telegram.org/#/login" target="_blank" rel="noreferrer">
                  <img src={soc_tel} alt='telegram' />
                </a >
              </div>
              <div className="header_logo">
                <img src={logo}
                  alt="Logo"
                  onClick={scrollToTop1} />
              </div>
              <div className="header_contacts">
                <img src={header_tel} alt="phone"/>
                <p>+38 (066) 088 69 81</p>
              </div>
            </div>

            <nav className="nav" id="navbar">
              <div className="nav-content">
                <ul className="nav-items">
                  <li className="nav-item">
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={40}
                      duration={500}
                    >
                      Обо мне
              </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="progects"
                      spy={true}
                      smooth={true}
                      offset={40}
                      duration={500}
                    >
                      Проекты
              </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="contacts"
                      spy={true}
                      smooth={true}
                      offset={40}
                      duration={500}
                    >
                      Контакты
              </Link>
                  </li>

                </ul>
              </div>
            </nav>
          </div>

          <div className="header_img_container">
            <img src={header_cont_1} alt="" className='header_img_hide'/>
            <img src={header_cont_2} alt=""/>
            <img src={header_cont_3} alt="" className='header_img_hide'/>
          </div>
        </div>
        }

        {isTabletOrMobile && 
        <div className='header_content'>
          <div className="header_logo">
            <img src={logo}
                 alt="Logo"
                 onClick={scrollToTop1} />
          </div>
          <div className="header_contacts">
                <img src={header_tel} alt="phone"/>
                <p>+38 (066) 088 69 81</p>
          </div>
          <div className="header_social">
                <a  href="https://uk-ua.facebook.com/" target="_blank" rel="noreferrer">
                  <img src={soc_fb} alt='facebook' />
                </a >
                <a  href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  <img src={soc_inst} alt='instagram' />
                </a >
                <a  href="https://web.telegram.org/#/login" target="_blank" rel="noreferrer">
                  <img src={soc_tel} alt='telegram' />
                </a >
          </div>
          <div className="m_header_img">
            <Slider {...settings}>
                <div>
                  <img src={header_cont_2} alt=""/>
                </div>
                <div>
                  <img src={header_cont_1} alt=""/>
                </div> 
                <div>
                  <img src={header_cont_3} alt=""/>
                </div>
            </Slider>

          </div>
          <div>
            <Menu />
          </div>
        </div>
       }
      </>
    );
  
}