import React from "react";
import { Link } from "react-scroll";
import { useMediaQuery } from 'react-responsive';

import icon_phone from '../assets/icons8-phone-100.png';
import icon_fb from '../assets/icons8-facebook-500.png';
import icon_inst from '../assets/icons8-instagram-500.png';
import icon_tel from '../assets/Vector.png';
import icon_viber from '../assets/icons8-viber-500 1.png';

export default function Footer(){
const isBigScreen = useMediaQuery({ query: '(min-width: 790px)' })
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 790px)' })
    return(
        
        <div className="wrapper footer">
          <div className="container">
            {isBigScreen && <div className="footer_content">
              <div className="footer_nav">
                <nav className="fnav" id="fnavbar">
                  <div className="fnav-content">
                    <ul className="fnav-items">
                      <li className="fnav-item">
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
                      <li className="fnav-item">
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
                       <li className="fnav-item">
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
                <div className="footer_info"> © Все права защищены</div>
              </div>
              <div className="footer_contacts">
                <div className="footer_phone">
                  <img src={icon_phone} alt="phone"/>
                  <p>+38 (066) 088 69 81</p>
                </div>
                <div className="footer_social">                         
                  <a href="https://uk-ua.facebook.com/" target="_blank" rel="noreferrer"><img src={icon_fb} alt="facebook"/></a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={icon_inst} alt="instagram"/></a>
                  <a href="https://web.telegram.org/#/login" target="_blank" rel="noreferrer"><img src={icon_tel} alt="telegram" className="telegram"/></a>
                  <a href="https://www.viber.com/ru/" target="_blank" rel="noreferrer"><img src={icon_viber} alt="viber"/></a>       
                </div>
              </div>
            </div>}

              {isTabletOrMobile && <div className="footer_contacts">
                <div className="footer_phone">
                  <img src={icon_phone} alt="phone"/>
                  <p>+38 (066) 088 69 81</p>
                </div>
                <div className="footer_social">                         
                  <a href="https://uk-ua.facebook.com/" target="_blank" rel="noreferrer"><img src={icon_fb} alt="facebook"/></a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={icon_inst} alt="instagram"/></a>
                  <a href="https://web.telegram.org/#/login" target="_blank" rel="noreferrer"><img src={icon_tel} alt="telegram" className="telegram"/></a>
                  <a href="https://www.viber.com/ru/" target="_blank" rel="noreferrer"><img src={icon_viber} alt="viber"/></a>       
                </div>
                <div className="footer_info"> © Все права защищены</div>
              </div>}
            
          </div>
        </div>
     
        
    )
}