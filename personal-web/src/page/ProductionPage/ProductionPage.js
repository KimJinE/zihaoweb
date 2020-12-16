import React from "react";
import { render } from "react-dom";
import HeaderNav from "../../Component/Header/HeaderNav";
import "./ProductionPage.css";
import p1 from './../../picture/Wake_Up.png';
import p2 from './../../picture/Phantom_Thief-Debugger.gif';
import p3 from './../../picture/Animals.jpeg';

export default class ProductionPage extends React.Component {
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
                        </div>
                        <div className='production-name'>Wake_UP</div>
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
                        <div className='production-name'>Phantom Thief-Debugger</div>
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
                        </div>
                        <div className='production-name'>Animals</div>
                    </div>
                </div>
                <div id='production-controller'>
                    <bottom className='volum'>
                        <i className='fa fa-volume-down'></i>
                    </bottom>
                    <div className='musicControls'>
                        <span><i className='fas fa-step-backward' aria-hidden='false'></i></span>
                        <span><i className='fas fa-play'></i></span>
                    </div>
                </div>
            </div>
        );
    }
}