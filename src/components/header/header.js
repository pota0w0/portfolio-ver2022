import React from "react";
import { Mobile, PC } from "../layout/MediaQuery/MediaQuery.tsx"
import { Link } from 'react-router-dom';
import "./header.css"
import Nav from "./nav/nav"

function Header(props) {
    return(
        <>
            <div className="mobile_container">
                <Mobile>
                    <Nav/>
                </Mobile>
            </div>
            <div className="pc_container">
                <PC>
                    <Nav/>
                </PC>
            </div>
        </>
    )
}

export default Header