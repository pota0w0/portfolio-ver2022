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
              <h3>위벳유 코퍼레이션 오픈마켓 쇼핑몰 개발</h3>
              <div className="textArea">
                <div className="textWarp">
                  <div className="teachWrap">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Javascript</span>
                    <span>jQuery</span>
                    <span>PHP</span>
                  </div>
                  <p className="h5">2022.02 ~ 2022.03 (2month)</p>
                  <p className="h4">위벳유 오픈마켓 마이페이지 개발</p>
                  <ul>
                  <li>가비아 퍼스트몰을 이용해 오픈마켓 형식의 자사 쇼핑몰 개발</li>
                  <li>마이페이지, 로그인 페이지, 회원가입 페이지 프론트 전담 개발</li>
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