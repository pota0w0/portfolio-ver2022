import React from "react"
import { Mobile, PC } from "../components/layout/MediaQuery/MediaQuery.tsx"
import WorkSwiper from "../components/workSwiper/workSwiper"
import "../styles/work-frame.css"


const Work = (props) => {
    return (
        <>
        <Mobile>
          <div className="mobile_container">
              <div className="notice"><p>작업물은 PC로 <br/> 확인 하실 수 있습니다!</p></div>
          </div>
          </Mobile>

          <PC>
            <div className="pc_container">
                <div className="Work_Area">
                    <div className="Work_Wrap">
                      <div className="icon_Wrap">
                        <div className="icon"></div>
                        <div className="icon"></div>
                        <div className="icon"></div>
                      </div>
                      <WorkSwiper/>
                    </div>
                </div>
            </div>
          </PC>
      </>
    );
}

export default Work