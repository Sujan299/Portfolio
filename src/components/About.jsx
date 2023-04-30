import Typewriter from 'typewriter-effect';
function About() {
    return (
        <>
            <div className="container">
                <div className="content">
                    <div className="about">
                        <h1><Typewriter className="aboutMe" options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: [
                                "About Me !"
                            ],
                        }} /></h1>
                        <div >
                            <ul>
                                <li>Education: Bachelor Running !</li>
                                <li>Course: Bsc.CSIT !</li>
                                <li>From: Nepal !</li>
                            </ul>
                            <p className="desc">
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;