import React from "react";
import HeaderNav from "../../Component/Header/HeaderNav";
import "./ScoringPage.css";
import p1 from "./../../picture/Begger_King.jpg"
import p2 from "./../../picture/How_to_train_your_dragon.jpeg"
import p3 from "./../../picture/Ocean_Maker.jpeg"
import p4 from "./../../picture/The_Light_of_Winter.jpeg"
import m1 from "./../../music/Begger_King.mp3";
import m2 from "./../../music/First_Fly.mp3";
import m3 from "./../../music/After_the_War.mp3";
import m4 from "./../../music/Doom_Strike.mp3";
import m5 from "./../../music/The_Battle_Begins.mp3";
import m6 from "./../../music/The_Light_of_Winter.mp3";

import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import ReactAudioPlayer from 'react-audio-player';


export default class ScoringPage extends React.Component {
    constructor(props) {
        super(props);
        const song1 = new Audio(m1);
        const song2 = new Audio(m2);
        const song3 = new Audio(m3);
        const song4 = new Audio(m4);
        const song5 = new Audio(m5);
        const song6 = new Audio(m6);
        this.state = {
            songlist: [song1, song2, song3, song4, song5, song6],
            prevSong: -1,
            nextSong: 1,
            currentSong: null,
            music: null,
            currentplay: 'stop',
            music1: 'stop',
            music2: 'stop',
            music3: 'stop',
            currentTime: null,
            duration: null,
        };
    }

    playSong = (i) => {
        // this.setState({currentSong: 1});
        // alert(this.state.songlist[0].src);
        this.setState({currentplay: 'play'});
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
                                <div className='scoring-play'>
                                    <bottom className='scoring-play-bottom' onClick={() => this.playSong(1)}>
                                        <AiFillPlayCircle size='100%' />
                                    </bottom>
                                </div>
                        </div>
                        <div className='scoring-name'>Begger King (Game Soundtrack)<br />-Zihao Liu</div>
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
                                <div className='scoring-play'>
                                    <bottom className='scoring-play-bottom' onClick={() => this.playSong(2)}>
                                        <AiFillPlayCircle size='100%' />
                                    </bottom>
                                </div>
                        </div>
                        <div className='scoring-name'>First Fly (How to train your dragon)<br />-Zihao Liu</div>
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
                                <div className='scoring-play'>
                                    <bottom className='scoring-play-bottom' onClick={() => this.playSong(3)}>
                                        <AiFillPlayCircle size='100%' />
                                    </bottom>
                                </div>
                        </div>
                        <div className='scoring-name'>After the War (How to train you dragon)<br />-Zihao Liu</div>
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
                                <div className='scoring-play'>
                                    <bottom className='scoring-play-bottom' onClick={() => this.playSong(4)}>
                                        <AiFillPlayCircle size='100%' />
                                    </bottom>
                                </div>
                        </div>
                        <div className='scoring-name'>Doom Strike (Ocean Maker)<br />-Zihao Liu</div>
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
                                <div className='scoring-play'>
                                    <bottom className='scoring-play-bottom' onClick={() => this.playSong(5)}>
                                        <AiFillPlayCircle size='100%' />
                                    </bottom>
                                </div>
                        </div>
                        <div className='scoring-name'>The Battle Begins (Ocean Maker)<br />-Zihao Liu</div>
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
                                <div className='scoring-play'>
                                    <bottom className='scoring-play-bottom' onClick={() => this.playSong(6)}>
                                        <AiFillPlayCircle size='100%' />
                                    </bottom>
                                </div>
                        </div>
                        <div className='scoring-name'>The Light of Winter (Excerpt)<br />-Zihao Liu</div>
                    </div>


                </div>
                {this.state.currentplay === 'stop' ? <div></div>
                : <div id='production-controller'>
                    <ReactAudioPlayer
                    style={{width: '100%'}}
                    src={curSong.src}
                    autoPlay
                    controls></ReactAudioPlayer>
                </div> }
            </div>
        );
    }
}