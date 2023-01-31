import React from "react"
import { Mobile, PC } from "../../layout/MediaQuery/MediaQuery.tsx"
import { Link } from "react-router-dom";
import "../work-about.css"

function Portfolioabout() {
  return (
    <>
      <div className="Mobile_container">
          <Mobile>
                      
          </Mobile>
      </div>

      {/* pc */}
      <div className="Pc_container">
          <PC>
            <div className="area">
              <h3>개인 포트폴리오 사이트 제작</h3>
              <div className="textArea">
                <div className="textWarp">
                  <div className="teachWrap">
                    <span>React</span>
                    <span>CSS</span>
                    <span>Javascript</span>
                    <span>Git</span>
                    <span>Figma</span>
                  </div>
                  <p className="h5">2022.09 ~ 2022.12 (4month)</p>
                  <p className="h4">개인 포트폴리오 React 기반 웹사이트 개발</p>
                  <ul>
                  <li>사이트 기획 및 UIUX 제작</li>
                  <li>미디어 쿼리를 이용한 반응형 사이트 제작</li>
                  <li>Netify를 이용하여 사이트 배포</li>
                  </ul>
                </div>
              </div>
              <Link to="/">
                <h2>사이트 보러가기 
                  <span><img src="../img/site_move_icon.svg"/></span> 
                </h2>
              </Link>
            </div>
          </PC>
      </div>
    </>
  );
}

export default Portfolioabout;