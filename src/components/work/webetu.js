import React from "react"
import { Mobile, PC } from "../layout/MediaQuery/MediaQuery.tsx"
import "./portfolio.css"

class Webetu extends React.Component{
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
                      sdfsdfs
                    </div>
                  </PC>
              </div>
            </>
        )
    }
  }
  
  
export default Webetu