import React from "react"
import { Mobile, PC } from "../../layout/MediaQuery/MediaQuery.tsx"
import { Link } from "react-router-dom";
import "../work-about.css"

function Nalazooabout() {
    const url = "https://mate.webetu.co.kr"

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
              <h3>위벳유 코퍼레이션 홈페이지 개발</h3>
              <div className="textArea">
                <div className="textWarp">
                  <div className="teachWrap">
                    <span>PHP</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Javascript</span>
                    <span>jQuery</span>
                  </div>
                  <p className="h5">2022.01 ~ 2022.01 (1month)</p>
                  <p className="h4">위벳유 쇼핑몰 홍보 목적의 홈페이지 개발</p>
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