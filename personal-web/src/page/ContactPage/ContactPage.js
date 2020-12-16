import React from "react";
import HeaderNav from "../../Component/Header/HeaderNav";
import "./ContactPage.css"

export default class ContactPage extends React.Component {
    render() {
        return(
            <div id='Contact-container'>
                <div id="homeheader">
                    <HeaderNav/>
                </div>
                <div id='contact-mainpart'>
                    <div id='contact-title'>Contact</div>
                    <div id='contact-info'>
                        <pre className='contact-information'>Phone: <br />    +1 9294260226</pre>
                        <pre className='contact-information'>Email: <br />    leohaoge@gmail.com <br />    leohaoge@qq.com</pre>
                        <pre className='contact-information'>Soundcloud: <br />    <a
                            href='https://soundcloud.com/zihao-liu-774546112'
                            style={{color: 'white'}}
                        >https://soundcloud.com/zihao-liu-774546112</a>
                        </pre>
                    </div>
                </div>
            </div>
        );
    }
}