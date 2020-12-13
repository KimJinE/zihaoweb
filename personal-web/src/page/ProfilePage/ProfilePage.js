import React from "react";
import HeaderNav from "../../Component/Header/HeaderNav";
import "./ProfilePage.css"
import image from"./../../picture/profile.jpeg"

export default class ProfilePage extends React.Component {
    render() {
        return(
            <div id='Profile-container'>
                <div id="homeheader">
                    <HeaderNav/>
                </div>
                {/* <div id='Topborder'></div> */}
                <div id='profile-img'>
                </div>
                <div id='profile-mainpart'>
                    <div></div>
                </div>
            </div>
        );
    }
}