import React from "react"
import { Mobile, PC } from "../../layout/MediaQuery/MediaQuery.tsx"
import "../work.css"
import Modal from "../../modal/modal"
import Sevenabout from "./seven_about"

function Nalazoo (){
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
                    <h2 className="Webhttp">https://webetu.co.kr/main</h2>
                  </div>
                  <div className="imgWrap">
                    <Modal
                    content={<Sevenabout/>}
                    />
                    <img className="WorkImg" alt="work image" src="../img/work05.png"/>
                    
                  </div>
                </div>
              </PC>
          </div>
        </>
        )
    
  }
  
  
export default Nalazoo