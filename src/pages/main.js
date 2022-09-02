import React from "react"
import { Mobile, PC } from "../components/layout/MediaQuery/MediaQuery.tsx"
import { Link } from 'react-router-dom';
import Tabmenu from "../components/menuTab/menuTab"
import Typewriter from "../components/typewriter/typewriter"
import SwiperMenu from "../components/swiper/swiper.jsx"
import "../styles/main.css"

const Main = (props) => {
return (
<>
    <div className="mobile_container">
      <Mobile>
        <div className="topBoxarray">
          <div className="leftBox">
            <div className="textBox">
              <div className="boxDeco">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>
                <Typewriter/>
              </p>
            </div>
          </div>
          <div className="rightBox">
            <p>ver.<br/> 2022</p>
          </div>
        </div>
        <div className="welcomeBox">
          <p>WELCOME</p>
          <div className="bgImg">
           <img src="img/body_welcome.svg" />
          </div>
        </div>
        <div className="swiperMenu">
          <SwiperMenu/>
        </div>

        
      </Mobile>
    </div>

    <div className="pc_container">
      <PC>
        <div className="topBoxarray">
          <div className="leftBox">
            <div className="textBox">
              <div className="boxDeco">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>
                <Typewriter/>
              </p>
            </div>
          </div>
          <div className="rightBox">
            <div className="welcomeBox">
              <p>WELCOME</p>
              <div className="bgImg">
                <img src="img/body_welcome.svg"></img>
              </div>
            </div>
          </div>
        </div>

        <Tabmenu/>
        
        <div className="bottomBoxarry">
          <Link to="./work">
            <span className="workLeftbox">
              <p>VIEW MY<br/>WORKS</p>
            </span>
            <div className="workRightbox">
                <div className="arrowBox">
                  <img className="viewArrow" alt="arrow" src="../img/arrow.svg"/>
                  <img className="Arrowactive" alt="arrow" src="../img/arrowActive.svg"/>
                </div>
                <p>WEB POTRFOLIO</p>
            </div>
          </Link>
        </div>
      </PC>
    </div>
</>
  );
}

export default Main;