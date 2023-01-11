import React, { Component } from "react";
import { Mobile, PC } from "../layout/MediaQuery/MediaQuery.tsx"
import "./about.css"

class About extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    render(){
        return(
            <>
              <div className="About_Mobile_container">
                  <Mobile>
                      <h2>Who i ammm...</h2>
                      <div className="m_AboutTextWrap">
                        <div className="m_AboutImg">
                          <img alt="me!!" src="../img/about_me_moblie.svg"/>
                        </div>
                        <p>
                          사용자 친화적이고<br/>
                          최신 트렌드를 중요시 하며<br/>
                          매우 꼼꼼한 성격을 가지고 있는<br/>
                          <span>Plus!</span><br/>
                          공부를 밥 먹듯이 하며 필요한 <br/>
                          새로운 기술들을 습득하는.<br/>
                          프론트엔드 개발자 박하륜입니다.
                        </p>
                      </div>              
                  </Mobile>
              </div>

              {/* pc */}
              <div className="About_Pc_container">
                  <PC>
                    <div className="AboutWrap">
                      <div className="AboutImg">
                        <img alt="me!!" src="../img/about_me.svg"/>
                      </div>
                      <div className="AboutTextWrap">
                        <h2>Who i ammm...</h2>
                        <p>
                          사용자 친화적이고<br/>
                          최신 트렌드를 중요시 하며<br/>
                          매우 꼼꼼한 성격을 가지고 있는<br/>
                          <span>Plus!</span><br/>
                          공부를 밥 먹듯이 하며 필요한 <br/>
                          새로운 기술들을 습득하는.<br/>
                          프론트엔드 개발자 박하륜입니다.
                        </p>
                      </div>
                    </div>
                  </PC>
              </div>
            </>
        )
    }
  }
  
  
export default About