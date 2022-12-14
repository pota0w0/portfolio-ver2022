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
                  ing...
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
                    <div className="TechFrontImgWrap"> <div className="TechFrontImg">
                      <img alt="Fontend!!" src="../img/tech_front.svg"/>
                    </div></div>
                    
                  </div>
                </div>
              </PC>
          </div>
        </>
        )
    }
  }
  
  
export default Tech