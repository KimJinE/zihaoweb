import React from "react";
import HeaderNav from "../../Component/Header/HeaderNav";
import "./ProfilePage.css";
import image from"./../../picture/profile.jpeg";
import { Document, Page } from 'react-pdf';
import resumePDF from './../../Zihao_Liu_Resume.pdf';

export default class ProfilePage extends React.Component {
    render() {
        // const [numPages, setNumPages] = useState(null);
        // const [pageNumber, setPageNumber] = useState(1);
        const link =resumePDF;
        return(
            <div id='Profile-container'>
                {/* <Document
                    file={resumePDF}
                >
                    <Page pageNumber={1} />
                </Document> */}
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
                        <p className='basic-style'>Education:</p>
                        <p className='basic-style'>2005.9-2011.7<br />
                            Beijing ChaoYang experimental primary school</p>
                        <p className='basic-style'>2011.9-2014.7<br />
                            Beijing National Day School</p>
                        <p className='basic-style'>2014.9-2016.7<br />
                            The Second High School Affiliated to Beijing Normal University (International Department)</p>
                        <p className='basic-style'>2017.1-2020.12<br />
                        Berklee College of Music<br />*Contemporary writing and production & Film Scoring (dual major) *Game Scoring (minor)</p>
                        <pre className='basic-style'>Resume:<br />   <a href={link}>Zihao's Resume</a></pre>
                    </div>
                    <div id='experience'>
                        <p className='exp-info'>Zihao started to learn classical piano at the age of four and jazz piano at the age of 15. The second instrument guitar (folk guitar and electric guitar) can be played and sung.</p>
                        <p className='exp-info'>He joined the Children's Palace Choir in Dongcheng District, Beijing since he was five years old. During the period, he participated in numerous performances and competitions and won numerous awards. Climb to the major theaters in Beijing, including the National Grand Theater, Zhongshan Concert Hall, Century Theater, etc. In July 2016, he participated in the 2016 Sochi World Chorus Competition with the group. In December 2019, Zihao was invited to write the choir song for the Children's Palace Chorus.</p>
                        <p className='exp-info'>Zihao started writing songs at the age of nine and has composed dozens of songs so far. In 2018, he completed his first album "Eighteen Years Old" and independently completed the production of composition, lyrics, singing, and arrangement.</p>
                        <p className='exp-info'>During high school, he formed a class band and served as an arranger, guitarist, and keyboard player.</p>
                        <p className='exp-info'>Since childhood, Zihao has learned solfeggio, ear training, drum set, taekwondo, MJ dance, flute and so on.</p>
                        <p className='exp-info'>Football enthusiast, was selected to the school football team in high school, the main player.</p>
                        <p className='exp-info'>A "heavy" e-sports game player. In 2016, he independently completed the soundtrack composition and production for the music mobile game "Three Kingdoms", which was nominated for the "Golden Ling Award" Best Game Music of the Year.</p>
                        <p className='exp-info'>In 2020, Zihao was hired as a game composer by SOHU Changyou Game Company.</p>
                        <p className='exp-info'>While studying at Berklee, in addition to completing his academic works, Zihao has also worked as a composer for TV series and TV shows, and provided music scores for independent short films.</p>
                        
                    </div>
                </div>
            </div>
        );
    }
}