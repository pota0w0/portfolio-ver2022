import React, { Component } from "react";
import About from "../main/about/about";
import Tech from "../main/tech/tech";
import More from "../main/more/more";
import "./menuTab.css";


const menuList = {
    0: <About />,
    1: <Tech />,
    2: <More/>
  };
  
export default class MenuTab extends React.Component{
    constructor(props) {
        super();

        this.state = {
        menu: 0,
        };
    }

    changeMenu = (menuIndex) =>{
        this.setState({menu : menuIndex});
    }

    render(){
        return(
        <>
            <div className="contentArea">
                {menuList[this.state.menu]}
            </div>
            <div className="tabArry">
                <ul className="tabs">
                    <li className={`${this.state.menu === 0? 'active': ''}`} onClick={() => this.changeMenu(0)}>ABOUT ME</li>
                    <li className={`${this.state.menu === 1? 'active': ''}`} onClick={() => this.changeMenu(1)}>TECH SKILL</li>
                    <li className={`${this.state.menu === 2? 'active': ''}`} onClick={() => this.changeMenu(2)}>AND...</li>
                </ul>
            </div>
            
        </>
        )
    }
}
  