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
                    <div id='profile-name'>Zihao Liu</div>
                    <div id='basic-info'>
                        <p className='basic-style'>1999.6.27</p>
                        <p className='basic-style'>Beijing, China</p>
                        <p className='basic-style'>Education</p>
                        <p className='basic-style'>2005.9-2011.7<br />
                            Beijing ChaoYang experimental primary school</p>
                        <p className='basic-style'>2011.9-2014.7<br />
                            Beijing National Day School</p>
                        <p className='basic-style'>2014.9-2016.7<br />
                            The Second High School Affiliated to Beijing Normal University (International Department)</p>
                        <p className='basic-style'>2017.1 up to now<br />
                            Berklee College of Music (CWP & Film Scoring)</p>
                    </div>
                    <div id='experience'>
                        <p className='exp-info'>Compared with the general children who is more sensitivity to music rhythm, Zihao is more sensitive and more enjoyable to music melody.</p>
                        <p className='exp-info'>At the age of four, Zihao began to learn classical piano, then he turned to jazz piano when he was fifteen years old.</p>
                        <p className='exp-info'>The second instrument is guitar (acoustic guitar and electric guitar), playing and singing.</p>
                        <p className='exp-info'>At the age of five, Zihao entered the Beijing Dongcheng District juvenile Palace Choir until he went to university in the United States. During the period, he participated in numerous performances and competitions. It won numerous awards in the main theatres in Beijing, including the National Theatre, the Zhongshan music hall, the Century Theatre and so on, and participated in the 2016 Sochi world chorus contest in July 2016.</p>
                        <p className='exp-info'>At the age of nine, he began to write songs, and dozens of songs have been written so far.</p>
                        <p className='exp-info'>During senior high school, Zihao organized a class band and became popular in school, as an arranger, guitarist and keyboard player.</p>
                        <p className='exp-info'>Since childhood, he has also studied some solfeggio, drum, taekwondo and MJ dance as some hobbies.</p>
                        <p className='exp-info'>Soccer fans, as the main players in the high school soccer team.</p>
                        <p className='exp-info'>A "serious" video game players. Zihao produced the game scoring independently for the MUG mobile game “The Three Kingdoms of Cube" and got into the best annual game music nomination in 2016.</p>
                        
                    </div>
                </div>
            </div>
        );
    }
}