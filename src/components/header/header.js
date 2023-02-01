import React from "react";
import { Mobile, PC } from "../layout/MediaQuery/MediaQuery.tsx"
import { Link } from 'react-router-dom';
import "./header.css"
import Nav from "./nav/nav"

function Header(props) {
    return(
        <>
            <Mobile>
                <div className="mobile_nav">
                    <Nav/>
                </div>
            </Mobile>
            <PC>
                <div className="pc_nav">
                    <Nav/>
                </div>
            </PC>
        </>
    )
}

export default Header