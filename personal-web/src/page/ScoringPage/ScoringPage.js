import React from "react";
import HeaderNav from "../../Component/Header/HeaderNav";
import "./ScoringPage.css";
import p1 from "./../../picture/Begger_King.jpg"
import p2 from "./../../picture/How_to_train_your_dragon.jpeg"
import p3 from "./../../picture/Ocean_Maker.jpeg"
import p4 from "./../../picture/The_Light_of_Winter.jpeg"

export default class ScoringPage extends React.Component {
    render() {
        return(
            <div id='Scoring-container'>
                <div id="homeheader">
                    <HeaderNav/>
                </div>
                <div id='scoring-list'>
                    <div className='scoring-img'>
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
                        <div className='scoring-name'>Begger King</div>
                    </div>
                    <div className='scoring-img'>
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
                        <div className='scoring-name'>How to train your dragon</div>
                    </div>
                    <div className='scoring-img'>
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
                        <div className='scoring-name'>Ocean Maker</div>
                    </div>
                    <div className='scoring-img'>
                    <div 
                        style={{
                            position: 'absolute',
                            backgroundImage: `url(${p4})`,
                            width: '100%', 
                            height: '69%',
                            backgroundSize: 'auto 100%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPositionX: 'center',
                            }}>
                        </div>
                        <div className='scoring-name'>The Light of Winter</div>
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