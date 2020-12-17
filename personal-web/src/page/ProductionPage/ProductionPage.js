import React from "react";
import { render } from "react-dom";
import HeaderNav from "../../Component/Header/HeaderNav";
import "./ProductionPage.css";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BsFillVolumeDownFill } from "react-icons/bs";

import p1 from './../../picture/Wake_Up.png';
import p2 from './../../picture/Phantom_Thief-Debugger.gif';
import p3 from './../../picture/Animals.jpeg';
import m1 from './../../music/Wake_Up.wav';
import m2 from './../../music/Phantom_Thief-Debugger.mp3';
import m3 from './../../music/Animal_Debugger.mp3';

function getTime(time) {
    if (!isNaN(time)) {
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
    }
}

export default class ProductionPage extends React.Component {
    constructor(props) {
        super(props);
        const song1 = new Audio(m1);
        const song2 = new Audio(m2);
        const song3 = new Audio(m3);
        this.state = {
            songlist: [song1, song2, song3],
            prevSong: -1,
            nextSong: 1,
            currentSong: null,
            music: 1,
            currentplay: 'stop',
            music1: 'stop',
            music2: 'stop',
            music3: 'stop',
            currentTime: null,
            duration: null,
        };
    }
    componentDidMount() {
        // const song1 = new Audio(m1);
        // const song2 = new Audio(m2);
        // const song3 = new Audio(m3);
        // this.setState({song1, song2, song3})
        // this.music.addEventListener("timeupdate", (e) => {
        //     this.setState({
        //       currentTime: e.target.currentTime,
        //       duration: e.target.duration
        //     });
        // });
    }

    // componentDidUpdate(prevState) {
    //     if (this.state.music !== prevState.music){
    //         var i = this.state.music;
    //         let temp = this.state.songlist[i-1];
    //         this.music = temp;
    //         this.music.play();
    //         this.setState({currentplay: 'play'});
            
    //     }
    // }

    toggleAudio = () =>{
        
    }

    playSong = (i) => {
        // this.setState({currentSong: 1});
        var currentmusic = this.state.music;
        if (i === 1) {
            if (currentmusic === 1) {
                var m = this.state.music1;
                if (m === 'stop'){
                    // this.state.currentSong.play();
                    this.setState({music1: 'play'});
                }
                else{
                    // this.state.currentSong.pause();
                    this.setState({music1: 'stop'});
                }
            }
            else {
                // this.state.currentSong.pause();
                this.setState({music1: 'play', music: 1, music2: 'stop', music3: 'stop'})
                // this.state.currentSong.play();
            }
        }
        else if (i === 2) {
            if (currentmusic === 2) {
                var m = this.state.music2;
                if (m === 'stop'){
                    // this.state.currentSong.play();
                    this.setState({music2: 'play'});
                }
                else{
                    // this.state.currentSong.pause();
                    this.setState({music2: 'stop'});
                }
            }
            else {
                // this.state.currentSong.remove();
                this.setState({music2: 'play', music: 2, music1: 'stop', music3: 'stop'})
                // this.state.currentSong.play();
            }
        }
        else{
            if (currentmusic === 3) {
                var m = this.state.music3;
                if (m === 'stop'){
                    // this.state.currentSong.play();
                    this.setState({music3: 'play'});
                }
                else{
                    // this.state.currentSong.pause();
                    this.setState({music3: 'stop'});
                }
            }
            else {
                this.setState({music3: 'play', music: 3, music1: 'stop', music2: 'stop'})
                // this.state.currentSong.play();
            }
        }
    };

    render() {
        const curmusic = this.state.music;
        const curSong = this.state.songlist[curmusic-1];
        const currentTime = getTime(this.state.currentTime);
        const duration = getTime(this.state.duration);
        return(
            <div id='Production-container'>
                <audio 
                    preload="metadata" 
                    src= {curSong}
                    ref={(audio) => {this.lectureAudio = audio}} 
                    style={{width: '1px', height: '1px', visibility: 'hidden'}} 
                    onCanPlay={() => this.handleAudioCanplay()}
                    onTimeUpdate={() => this.handleTimeUpdate()}>
                </audio>
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
                                    <bottom className='play-bottom' onClick={() => this.playSong(1)}>
                                    {this.state.music1 === 'stop' ? <AiFillPlayCircle size='100%' />
                                    : <AiFillPauseCircle size='100%' />}
                                    </bottom>
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
                                <div className='production-play'>
                                    <bottom className='play-bottom' onClick={() => this.playSong(2)}>
                                    {this.state.music2 === 'stop' ? <AiFillPlayCircle size='100%' />
                                    : <AiFillPauseCircle size='100%' />}
                                    </bottom>
                                </div>
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
                                <div className='production-play'>
                                    <bottom className='play-bottom' onClick={() => this.playSong(3)}>
                                    {this.state.music3 === 'stop' ? <AiFillPlayCircle size='100%' />
                                    : <AiFillPauseCircle size='100%' />}
                                    </bottom>
                                </div>
                        </div>
                        <div className='production-name'>Animals<br />-Zihao Liu</div>
                    </div>
                </div>
                <div id='production-controller'>

                    {/* volume */}
                    <div id='volum'>
                        <bottom>
                            <BsFillVolumeDownFill />
                        </bottom>
                    </div>
                    <img id='controller-img' src={p1}></img>
                    
                    {/* play */}
                    <div id='controller-play'>
                        <bottom id='controller-play-bottom' onClick={() => this.playSong(3)}>
                        {this.state.music3 === 'stop' ? <AiFillPlayCircle size='100%' />
                        : <AiFillPauseCircle size='100%' />}
                        </bottom>
                    </div>

                    {/* progress bar */}
                    <div id='progressb'>
                        <div className="audio-progress" ref={(r) => {
                                this.audioProgress = r
                            }}>
                            <div className="audio-progress-bar"
                                ref={(bar) => {
                                    this.progressBar = bar
                                }}>
                            </div>

                            {/* 小点 */}
                            <div className="audio-progress-point-area" ref={(point) => {
                                this.audioPoint = point
                            }} style={{ left: this.state.left + 'px' }}>
                                <div className="audio-progress-point">
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 计时器 */}
                    {/* <div className="audio-timer">
                        <p>{this.renderPlayTime(this.state.currentTime)}</p>
                        <p>{this.renderPlayTime(this.state.duration)}</p>
                    </div> */}
                </div>
            </div>
        );
    }
}