import React from "react"
import { Mobile, PC } from "../../layout/MediaQuery/MediaQuery.tsx"
import "../work.css"
import Modal from "../../modal/modal"
import Byheydayabout from "./byheyday_about"

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
                    <h2 className="Webhttp">http://rebyheyday.dothome.co.kr/</h2>
                  </div>
                  <div className="imgWrap">
                    <Modal
                    content={<Byheydayabout/>}
                    />
                    <img className="WorkImg" alt="work image" src="../img/work06.png"/>
                    
                  </div>
                </div>
              </PC>
          </div>
        </>
        )
    
  }
  
  
export default Nalazoo