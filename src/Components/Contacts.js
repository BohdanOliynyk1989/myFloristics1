import React from "react";

import icon_ph from '../assets/icons8-phone-100.png';
import icon_email from '../assets/icons8-new-post-100 1.png';
import icon_inst from '../assets/icons8-instagram-500.png';

export default function Contacts({id}){
    return(
        
        <div className="wrapper">
          <div className="container">
            <div className="cont_content" id={id}>
              <div className="cont_title">Контакты</div>
              <div className="cont_body">
                <div className="cont_contacts">
                  <div className="cont_phone">
                    <img src={icon_ph} alt="phone"/>
                    <p>+38 (066) 088 69 81</p>
                  </div>
                  <div className="cont_email">
                    <img src={icon_email} alt="email"/>
                    <p>herasymova.yulia@gmail.com </p>
                  </div>
                  <div className="cont_inst">
                    <img src={icon_inst} alt="instagram"/>
                    <p>vinogradskaya_florist</p>
                  </div>
                </div>
                <div className="cont_text">
                  <p>Для заказа профессионального цветочного оформления и особенных буктов невести используйте все доступные средства связи. Я открыта для всех ваших цветочных идей. Каждый проект разрабатывается индивидульно с учетом пожеланий пары и сезонности цветов и зелени.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
     
        
    )
}