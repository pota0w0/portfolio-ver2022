import React from "react"
import { Mobile, PC } from "../layout/MediaQuery/MediaQuery.tsx"
import "./portfolio.css"

class Byheyday extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    render(){
        return(
          <>
          <div className="Mobile_container">
              <Mobile>
                         
              </Mobile>
          </div>

          {/* pc */}
          <div className="Pc_container">
              <PC>
                <div>
                  <div className="httpWrap">
                    <h2 className="Webhttp">https://hahafolio.net</h2>
                  </div>
                  <div className="imgWrap">
                    <img className="WorkImg" alt="work image" src="../img/work06.png"/>
                  </div>
                </div>
              </PC>
          </div>
        </>
        )
    }
  }
  
  
export default Byheyday