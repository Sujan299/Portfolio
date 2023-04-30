import Typewriter from 'typewriter-effect';
function Contact(){
    return (
        <>
        <div className="container">
            <div className="content">
                <div className="contact">
                    <form action="">
                    <h1>
                    <Typewriter className="aboutMe" options={{
                        autoStart:true,
                        loop:true,
                        delay: 40,
                        strings:[
                            "Contact Me !"
                        ],
                    }}/>
                    </h1>
                        <input type="text" name="email" placeholder="Email"/>
                        <textarea name="desc" id="" cols="30" rows="10" placeholder="Description"></textarea>
                        <button type="submit" className="button1">Send</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;