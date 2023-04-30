import React from 'react'
import { HashLink } from 'react-router-hash-link';
import {SocialIcon} from 'react-social-icons';
function Footer() {
    return (
        <>
            <div className="container">
                <div className="footer">
                    <div className="contact">
                        <h2>Contact</h2>
                        <hr />
                        <h5 className="item">Email: <a href="http://">mrsujan321@gmail.com</a></h5>
                        <h5 className="item">Phone: <a href="http://">+9779810337729</a></h5>
                        <h5 className="item">Linkedin: <a href="https://www.linkedin.com/in/sujan-chaudhary-a8a549208/">Linkedin</a></h5>
                    </div>
                    <div className="menu">
                        <h2>Quick links</h2>
                        <hr />
                        <ul>
                            <HashLink smooth to="/#home">Home</HashLink>
                            <HashLink smooth to="/#skills">Skills</HashLink>
                            <HashLink smooth to="/#projects">Projects</HashLink>
                            <HashLink smooth to="/about">About</HashLink>
                            <HashLink smooth to="/contact">Contact</HashLink>
                        </ul>
                    </div>
                    <div className="social">
                        <h2>Social Links</h2><hr />
                        <div className="social-icons">
                        <SocialIcon className='icons' url="https://twitter.com/SujanChh" />
                        <SocialIcon className='icons' url="https://www.linkedin.com/in/sujan-chaudhary-a8a549208/" />
                        <SocialIcon className='icons' url="https://facebook.com/jaketrent" 
                           />
                        </div> 

                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;