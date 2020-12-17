import React from "react";
import "./HeaderNav.css";

export default class HeaderNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentpage: localStorage.getItem("header") || 0,
            pagepick: ["none", "none", "none", "none", "none", "none", "none"],
        }
    }
    componentDidMount() {
        this.setState({
            pagepick: ["none", "none", "none", "none", "none", "none", "none"],
        });
        const newpick = this.state.pagepick.slice();
        newpick[this.state.currentpage] = "white";
        this.setState({ pagepick: newpick });
    };
    render() {
        return(
            <div id='fullH'>
                <div id='list'>
                    <div className="item_box">
                        <div className='item'>
                            <a
                                href="/"
                                className='it'
                                style={{color: this.state.pagepick[0]}}
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
                                className='it'
                                style={{color: this.state.pagepick[1]}}
                                onClick={() => {
                                localStorage.setItem("header", 1);
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
                                className='it'
                                style={{color: this.state.pagepick[2]}}
                                onClick={() => {
                                localStorage.setItem("header", 2);
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
                                className='it'
                                style={{color: this.state.pagepick[3]}}
                                onClick={() => {
                                localStorage.setItem("header", 3);
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
                                className='it'
                                style={{color: this.state.pagepick[4]}}
                                onClick={() => {
                                localStorage.setItem("header", 4);
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