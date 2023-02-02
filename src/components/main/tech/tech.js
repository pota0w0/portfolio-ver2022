import React, { Component } from "react";
import { Mobile, PC } from "../../layout/MediaQuery/MediaQuery.tsx"
import "./tech.css"

function Tech (){
        return(
          <>
          <Mobile>
            <div className="Tech_Mobile_container">
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
            </div>
          </Mobile>

          {/* pc */}
          <PC>
            <div className="Tech_Pc_container">
                <div className="TechWrap">
                  <div className="TechFront">
                    <h2 className="Tech_Text">Frontend</h2>
                    <div className="TechImg">
                      <img alt="Fontend!!" src="../img/tech_front.png"/>
                    </div>
                  </div>
                  <div className="TechUIUX">
                    <h2 className="Tech_Text">UIUX Desigh</h2>
                    <div className="TechImg">
                      <img alt="UIUX!!" src="../img/tech_uiux.png"/>
                    </div>
                  </div>
                  <div className="TechVersion">
                    <h2 className="Tech_Text">Version Control</h2>
                    <div className="TechImg">
                      <img alt="Version Control!!" src="../img/tech_version.png"/>
                    </div>
                  </div>
                </div>
            </div>
          </PC>
        </>
        )
  }
  
  
export default Tech