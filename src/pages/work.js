import React from "react"
import { Mobile, PC } from "../components/layout/MediaQuery/MediaQuery.tsx"
import WorkSwiper from "../components/workSwiper/workSwiper"
import "../styles/work-frame.css"


const Work = (props) => {
    return (
        <>
    <div className="mobile_container">
      <Mobile>
        <div className="notice"><p>작업물은 PC로 <br/> 확인 하실 수 있습니다!</p></div>
      </Mobile>
    </div>

    <div className="pc_container">
      <PC>
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
      </PC>
    </div>
</>
    );
}

export default Work