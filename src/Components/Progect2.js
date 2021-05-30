import React from "react";
import { useMediaQuery } from 'react-responsive';

import body1 from "../assets/1_4.png";
import body2 from "../assets/1_2.png";
import carousel1 from "../assets/1_1.png";
import carousel2 from "../assets/1_3.jpg";

export default function Progect2() {
const isBigScreen = useMediaQuery({ query: '(min-width: 790px)' })
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 790px)' })
    return ( 
  
        <div className = "wrapper" >
            <div className = "container" >
                <div className = "prog_content">
                    <div className = "prog_title" > Проекты </div> 
                    {isBigScreen && <div className = "prog_body" >
                        <img src = { body1 } alt = "img1" />
                        <div className="prog_body_text">
                            <div className="text_tille">Аня&Олег</div>
                            <div className="text_body">Замок Лева</div>
                            <div className="text_date">11.03.2021</div>
                        </div>
                        <img src = { body2 } alt = "img2" />
                    </div>}
                    {isBigScreen && <div className = "prog_carousel" >
                        <img src = { carousel1 } alt = "img3" style={{height: '652px'}}/>
                        <img src = { carousel2 } alt = "img4" style={{height: '652px'}}/>
                    </div>}

                    {isTabletOrMobile && <div className="prog_mob2">
                        <div className="text_tille">Аня&Олег</div>
                        <div className="text_body">Замок Лева</div>
                        <div className="text_date">11.03.2021</div>
                    </div>}

                </div>
            </div>
        </div>
    
    );
}