import React from "react"
import { Mobile, PC } from "../components/layout/MediaQuery/MediaQuery.tsx"
import { Link } from 'react-router-dom';
import Tabmenu from "../components/menuTab/menuTab"
import Typewriter from "../components/typewriter/typewriter"
import MobileSwiper from "../components/mobileSwiper/mobileSwiper.jsx"
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
          <MobileSwiper/>
        </div>
        <div className="mobile_bottomBoxarry">
          <Link to="./work">
            <span className="mobile_workLeftbox">
              <p>VIEW<br/>WORKS</p>
            </span>
            <div className="mobile_workRightbox">
                <div className="mobile_arrowWrap">
                  <img className="mobile_viewArrow" alt="arrow" src="../img/mobile_arrow.svg"/>
                </div>
                <p>PORT<br/>FOLIO</p>
            </div>
          </Link>
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
        <div className="tabWrap">
          <Tabmenu/>
        </div>
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
                <p>WEB PORTFOLIO</p>
            </div>
          </Link>
        </div>
      </PC>
    </div>
</>
  );
}

export default Main;