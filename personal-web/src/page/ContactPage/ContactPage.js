import React from "react";
import HeaderNav from "../../Component/Header/HeaderNav";
import "./ContactPage.css"

export default class ContactPage extends React.Component {
    render() {
        return(
            <div id='Contact-container'>
                <div id="homeheader">
                    <HeaderNav/>
                </div>
                <div id='contact-mainpart'>
                    <div id='contact-title'></div>
                </div>
            </div>
        );
    }
}