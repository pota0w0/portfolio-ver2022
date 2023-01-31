import React from "react"
import { Mobile, PC } from "../../layout/MediaQuery/MediaQuery.tsx"
import { Link } from "react-router-dom";
import "../work-about.css"

function Nalazooabout() {
    const url = "https://m.webetu.co.kr/main"

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
              <h3>세븐 NFT 홈페이지 제작</h3>
              <div className="textArea">
                <div className="textWarp">
                  <div className="teachWrap">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Javascript</span>
                    <span>jQurey</span>
                    <span>abodeXD</span>
                  </div>
                  <p className="h5">2021.11 ~ 2021.12 (2month)</p>
                  <p className="h4">세븐 NFT 민팅 페이지 제작</p>
                  <ul>
                  <li>미디어 쿼리를 이용한 반응형 사이트 제작</li>
                  <li>Javascript를 이용하여 인터렉티브 웹 개발</li>
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