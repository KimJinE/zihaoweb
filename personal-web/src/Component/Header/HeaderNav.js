import React from "react";
import "./HeaderNav.css";

export default class HeaderNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentpage: localStorage.getItem("header") || 0,
        }
    }
    render() {
        return(
            <div id='fullH'>
                <div id='list'>
                    <div className="item_box">
                        <a
                            className="item"
                            href="/"
                            onClick={() => {
                            localStorage.setItem("header", 0);
                            }}
                        >
                            Home
                        </a>
                    </div>
                    <div className="item_box">
                        <a
                            className="item"
                            href="/profile"
                            onClick={() => {
                            localStorage.setItem("header", 0);
                            }}
                        >
                            Profile
                        </a>
                    </div>
                    <div className="item_box">
                        <a
                            className="item"
                            href="/production"
                            onClick={() => {
                            localStorage.setItem("header", 0);
                            }}
                        >
                            Music Produciton
                        </a>
                    </div>
                    <div className="item_box">
                        <a
                            className="item"
                            href="/scoring"
                            onClick={() => {
                            localStorage.setItem("header", 0);
                            }}
                        >
                            Composition&Scoring
                        </a>
                    </div>
                    <div className="item_box">
                        <a
                            className="item"
                            href="/contact"
                            onClick={() => {
                            localStorage.setItem("header", 0);
                            }}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}