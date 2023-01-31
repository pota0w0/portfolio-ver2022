import React from "react"
import { Mobile, PC } from "../../layout/MediaQuery/MediaQuery.tsx"
import "../work.css"
import Modal from "../../modal/modal"
import Portabout from "./portfolio_about"

function Portfolio (){
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
                    <h2 className="Webhttp">https://hahafolo.net</h2>
                  </div>
                  <div className="imgWrap">
                    <Modal
                    content={<Portabout/>}
                    />
                    <img className="WorkImg" alt="work image" src="../img/work01.png"/>
                    
                  </div>
                </div>
              </PC>
          </div>
        </>
        )
    
  }
  
  
export default Portfolio