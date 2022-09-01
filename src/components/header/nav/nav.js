import React from "react";
import { Link } from 'react-router-dom';

function Nav(props) {
    return(
        <>
            <header>
                <div className="nav">
                    <Link to="/">
                        <img className="logo" alt="home" src="../img/logo.svg" />
                    </Link>
                    <ul>
                        <li>UIUX</li>
                        <li>PUBLISHING</li>
                        <li>FRONTEND</li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Nav