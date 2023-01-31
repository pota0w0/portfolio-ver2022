import React from "react"
import { Mobile, PC } from "../../layout/MediaQuery/MediaQuery.tsx"
import { Link } from "react-router-dom";
import "../work-about.css"

function Nalazooabout() {
    const url = "https://nalazoocare.com/klinix/"

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
              <h3>Nalazoo - 클리닉스 영문 사이트 개발</h3>
              <div className="textArea">
                <div className="textWarp">
                  <div className="teachWrap">
                    <span>PHP</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Javascript</span>
                    <span>jQuery</span>
                  </div>
                  <p className="h5">2022.04 ~ 2022.04 (1month)</p>
                  <p className="h4">날라주 - 클리닉스 제품을 소개하는 영문 웹사이트 개발</p>
                  <ul>
                    <li>사이트 기획 및 UIUX 제작</li>
                    <li>미디어 쿼리를 이용한 반응형 사이트 개발</li>
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