import React, { Component } from "react";
import { Mobile, PC } from "../layout/MediaQuery/MediaQuery.tsx"
import "./work.css"

class Portfolio extends React.Component{
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
                             
                  </Mobile>
              </div>

              {/* pc */}
              <div className="About_Pc_container">
                  <PC>
                    <div>
                     
                    </div>
                  </PC>
              </div>
            </>
        )
    }
  }
  
  
export default Portfolio