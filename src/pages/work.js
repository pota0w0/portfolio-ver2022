import React from "react"
import { Mobile, PC } from "../components/layout/MediaQuery/MediaQuery.tsx"
import { Link } from 'react-router-dom';
import WorkSwiper from "../components/workSwiper/workSwiper"
import "../styles/work.css"


const Work = (props) => {
    return (
        <>
    <div className="mobile_container">
      <Mobile>
        
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