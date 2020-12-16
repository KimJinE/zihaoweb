import React from "react";
import { render } from "react-dom";
import HeaderNav from "../../Component/Header/HeaderNav";
import "./ProductionPage.css";
import p1 from './../../picture/Wake_Up.png';
import p2 from './../../picture/Phantom_Thief-Debugger.gif';
import p3 from './../../picture/Animals.jpeg';
import m1 from './../../music/Wake_Up.wav';
import m2 from './../../music/Phantom_Thief-Debugger.mp3';
import m3 from './../../music/Animal_Debugger.mp3';

export default class ProductionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songlist: [m1,m2,m3],
            currentSong: 0,
            prevSong: -1,
            nextSong: 1,
            music: 'stop',
            currentTime: null,
            duration: null,
        };
    }
    componentDidMount() {

    }
    render() {
        return(
            <div id='Production-container'>
                <div id="homeheader">
                    <HeaderNav/>
                </div>
                <div id='production-list'>
                    <div className='production-img'>
                        <div 
                        style={{
                            position: 'absolute',
                            backgroundImage: `url(${p1})`,
                            width: '100%', 
                            height: '69%',
                            backgroundSize: 'auto 100%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPositionX: 'center',
                            }}>
                                <div className='production-play'>
                                    <bottom >play</bottom>
                                </div>
                        </div>
                        <div className='production-name'>Wake_UP<br />-Zihao Liu/Justin Lancelot</div>
                    </div>
                    <div className='production-img'>
                        <div 
                        style={{
                            position: 'absolute',
                            backgroundImage: `url(${p2})`,
                            width: '100%', 
                            height: '69%',
                            backgroundSize: 'auto 100%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPositionX: 'center',
                            }}>
                        </div>
                        <div className='production-name'>Phantom Thief-Debugger<br />-Zihao Liu</div>
                    </div>
                    <div className='production-img'>
                        <div 
                        style={{
                            position: 'absolute',
                            backgroundImage: `url(${p3})`,
                            width: '100%', 
                            height: '69%',
                            backgroundSize: 'auto 100%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPositionX: 'center',
                            }}>
                                <div className='production-play'></div>
                        </div>
                        <div className='production-name'>Animals<br />-Zihao Liu</div>
                    </div>
                </div>
                <div id='production-controller'>
                    <bottom className='volum'>
                        <i className='fa fa-volume-down'>d</i>
                    </bottom>
                    <div className='musicControls'>
                        <span><i className="fas fa-step-backward">b</i></span>
                        <span className="play"><i className='fas fa-play'></i>p</span>
                        <span><i className='fas fa-step-forward'>f</i></span>
                    </div>
                    <div className='progressb'>
                        <span className='currentT'>1:30</span>
                        <input type='range' name="progressBar"></input>
                    </div>
                </div>
            </div>
        );
    }
}