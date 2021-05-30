import React from "react";
import { useMediaQuery } from 'react-responsive';

import body1 from "../assets/IMG_2021-02-04 15_27_25.png";
import body2 from "../assets/IMG_2021-02-04 15_27_44 1.png";
import carousel1 from "../assets/IMG_2021-02-04 15_27_36.png";
import carousel2 from "../assets/IMG_2021-02-04 15_46_29 1.png";

export default function Progect1() {
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
                        <img src = { carousel1 } alt = "img3" />
                        <img src = { carousel2 } alt = "img4" />
                    </div>}

                    {isTabletOrMobile && <div className="prog_mob1">
                        <div className="text_tille">Аня&Олег</div>
                        <div className="text_body">Замок Лева</div>
                        <div className="text_date">11.03.2021</div>
                    </div>}

                </div>
            </div>
        </div>
    
    );
}