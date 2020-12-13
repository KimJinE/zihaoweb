import React from "react";
import HeaderNav from "../../Component/Header/HeaderNav";
import "./HomePage.css"

export default class HomePage extends React.Component {
    render() {
        return(
            <div id='Home-container'>
                <div id="homeheader">
                    <HeaderNav/>
                </div>
                <p>homepage</p>
                <div id='mianpart'>
                    
                </div>
            </div>
        );
    }
}