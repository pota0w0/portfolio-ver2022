import React, { Component } from "react";
import { Mobile, PC } from "../layout/MediaQuery/MediaQuery.tsx"
import "./tech.css"

class Tech extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    render(){
        return(
          <>
          <div className="Tech_Mobile_container">
              <Mobile>
                  <div className="m_TechWrap">
                    <div className="m_TechFront">
                      <div className="m_TechText">
                        <h2>Frontend</h2>
                      </div>
                      <div className="m_TechImg">
                        <img alt="Front!!" src="../img/tech_front_m.svg"/>
                      </div>
                    </div>
                    <div className="m_TechUIUX">
                      <div className="m_TechText">
                        <h2>UIUX Desigh</h2>
                      </div>
                      <div className="m_TechImg">
                        <img alt="Front!!" src="../img/tech_uiux_m.svg"/>
                      </div>
                    </div>
                    <div className="m_TechVersion">
                      <div className="m_TechText">
                        <h2>Version Control</h2>
                      </div>
                      <div className="m_TechImg">
                        <img alt="Front!!" src="../img/tech_version_m.svg"/>
                      </div>
                    </div>

                  </div>
              </Mobile>
          </div>

          {/* pc */}
          <div className="Tech_Pc_container">
              <PC>
                <div className="TechWrap">
                  <div className="TechFront">
                    <div className="Tech_Text_Wrap">
                      <h2>Frontend</h2>
                    </div>
                      <div className="TechImgWrap"> <div className="TechImg">
                        <img alt="Fontend!!" src="../img/tech_front.svg"/>
                      </div>
                    </div>
                  </div>
                  <div className="TechUIUX">
                    <div className="Tech_Text_Wrap">
                      <h2>UIUX Desigh</h2>
                    </div>
                      <div className="TechImgWrap"> <div className="TechImg">
                        <img alt="UIUX!!" src="../img/tech_uiux.svg"/>
                      </div>
                    </div>
                  </div>
                  <div className="TechVersion">
                    <div className="Tech_Text_Wrap">
                      <h2>Version Control</h2>
                    </div>
                      <div className="TechImgWrap"> <div className="TechImg">
                        <img alt="Version Control!!" src="../img/tech_version.svg"/>
                      </div>
                    </div>
                  </div>
                </div>
              </PC>
          </div>
        </>
        )
    }
  }
  
  
export default Tech