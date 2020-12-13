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
                <div id='home-name'></div>
                <div id='home-name-ch'></div>
                <div id='home-sentence1'></div>
                <div id='home-sentence2'></div>
                <div id='home-welcome'></div>
            </div>
        );
    }
}