import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Typewriter from 'typewriter-effect';
import myFace from '../assets/myFace.jpg';
import Skills from './Skills';
import "../styles/Skills.scss";
import Projects from './Projects';
import "../styles/Projects.scss";

function Home() {
    return (
        <>
            <div className="home1" id='home'>
                <div className="intro">
                    <h1>Hi,</h1>
                    <h1>I'm a</h1>
                    <h1>
                        <span>
                            <Typewriter options={{
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                strings: [
                                    "Web Developer !",
                                    "Frontend Developer !",
                                ],
                            }} />
                        </span>
                    </h1>
                    <button type="submit"><a href="../mycv.pdf" download
                    style={{textDecoration: "none",color:"black"}}
                    >Download <span>CV</span></a></button>
                    <div className="social-icons">
                        <SocialIcon className='icons' url="https://twitter.com/SujanChh" />
                        <SocialIcon className='icons' url="https://www.linkedin.com/in/sujan-chaudhary-a8a549208/" />
                        <SocialIcon className='icons' url="https://facebook.com/jaketrent" 
                           />
                    </div>
                </div>
                <div className="my">
                    <div className="myFace">
                        <img src={myFace} alt="" />
                    </div>
                </div>
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="projects">
                <Projects/>
            </div>
        </>
    )
}
export default Home;