import React from "react"
import { Mobile, PC } from "../../layout/MediaQuery/MediaQuery.tsx"
import { Link } from "react-router-dom";
import "../work-about.css"

function Nalazooabout() {
    const url = "http://renikon.dothome.co.kr/"

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
              <h3>니콘 홈페이지 리디자인 - 개인작업</h3>
              <div className="textArea">
                <div className="textWarp">
                  <div className="teachWrap">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Javascript</span>
                    <span>jQurey</span>
                    <span>abodeXD</span>
                  </div>
                  <p className="h5">2019.07 ~ 2019.08 (2month)</p>
                  <p className="h4">니콘 홈페이지 적응형 리뉴얼 - 리디자인 개인작업</p>
                  <ul>
                    <li>사이트 기획 및 UIUX 제작</li>
                    <li>적응형 PC&모바일 사이트 제작</li>
                  </ul>
                </div>
              </div>
              
                {/* */}
              

                <button onClick={()=>{window.open(url)}}>
                <h2>사이트 보러가기 
                  <span><img src="../img/site_move_icon.svg"/></span> 
                </h2> 
                </button>
            </div>
          </PC>
      </div>
    </>
  );
}

export default Nalazooabout;