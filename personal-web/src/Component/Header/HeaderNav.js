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
                        <div className='item'>
                            <a
                                href="/"
                                onClick={() => {
                                localStorage.setItem("header", 0);
                                }}
                            >
                                Home
                            </a>
                        </div>
                    </div>
                    <div className="item_box">
                        <div className='item'>
                            <a
                                href="/profile"
                                onClick={() => {
                                localStorage.setItem("header", 0);
                                }}
                            >
                                Profile
                            </a>
                        </div>
                    </div>
                    <div className="item_box">
                        <div className='item'>
                            <a
                                href="/production"
                                onClick={() => {
                                localStorage.setItem("header", 0);
                                }}
                            >
                                Music Production
                            </a>
                        </div>
                    </div>
                    <div className="item_box">
                        <div className='item'>
                            <a
                                href="/scoring"
                                onClick={() => {
                                localStorage.setItem("header", 0);
                                }}
                            >
                                Composition&Scoring
                            </a>
                        </div>
                    </div>
                    <div className="item_box">
                        <div className='item'>
                            <a
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
            </div>
        );
    }
}