import React from "react"
import { Mobile, PC } from "../components/layout/MediaQuery/MediaQuery.tsx"
import { Link } from 'react-router-dom';
import Tabmenu from "../components/menuTab/menuTab"
import Typewriter from "typewriter-effect";
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
              <Typewriter onInit={(typewriter)=> { 
                typewriter 
                .typeString("WELCOMES YOU")
                .pauseFor(1000)
                .deleteAll()
                .typeString("but I... dreaming of being a front-end developer.")
                .start();
                }}/>
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
        
        <Tabmenu/>

        
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
              <Typewriter onInit={(typewriter)=> { 
                typewriter 
                .typeString("Web publisher.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("but I...")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Front-end developer.")
                .start();
                }}/>
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
            <span>
              <p>VIEW MY<br/>WORKS</p>
            </span>
          </Link>
        </div>
      </PC>
    </div>
</>
  );
}

export default Main;