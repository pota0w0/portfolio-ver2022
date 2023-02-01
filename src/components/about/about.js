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
            <Mobile>
              <div className="About_Mobile_container">
                  
                      <h2>Who i ammm...</h2>
                      <div className="m_AboutTextWrap">
                        <div className="m_AboutImg">
                          <img alt="me!!" src="../img/about_me_moblie.svg"/>
                        </div>
                        <p>
                          사용자 친화적인 개발자<br/>
                          최신 트렌드를 중요시 하는 개발자<br/>
                          매우 꼼꼼한 성격을 가지고 있는 개발자<br/>
                          공부를 밥 먹듯이 하며 필요한 <br/>
                          새로운 기술들을 습득하는 개발자
                        </p>
                      </div>
                      <h2>IT'S ME! Park Haryun!</h2>              
                  
              </div>
            </Mobile>
              {/* pc */}
              <PC>
                <div className="About_Pc_container">
                    <div className="AboutImg">
                      <img alt="me!!" src="../img/about_me.svg"/>
                    </div>

                    <div className="aboutArea">
                      <div className="AboutTextWrap">
                        <h2>Who i ammm...</h2>
                        <p>
                          사용자 친화적인 개발자<br/>
                          최신 트렌드를 중요시 하는 개발자<br/>
                          매우 꼼꼼한 성격을 가지고 있는 개발자<br/>
                          공부를 밥 먹듯이 하며 필요한 <br/>
                          새로운 기술들을 습득하는 개발자
                        </p>
                        <h3>IT'S ME! <br/> Park Haryun!</h3>
                      </div>
                    </div>
                </div>
              </PC>
            </>
        )
    }
  }
  
  
export default About