import React,{useState} from 'react';
import {HashLink} from 'react-router-hash-link'
function Header(){
    const [classList,setClassList] = useState("hiddenBtn");
    const handleButtonClick = function (){
        if(classList === 'hiddenBtn'){
            setClassList("showBtn");
        }
        else{
            setClassList("hiddenBtn");
        }
    }
    return (
        <div className="container">
            <nav className="nav-list">
                <h1>Sujan <span>Ch</span>
                </h1>
                <i className="fa-solid fa-bars option" onClick={handleButtonClick}></i>
                <ul className={classList}>
                    <HashLink smooth to="/#home">Home</HashLink>
                    <HashLink smooth to="/#skills">Skills</HashLink>
                    <HashLink smooth to="/#projects">Projects</HashLink>
                    <HashLink smooth to="/about">About</HashLink>
                    <HashLink smooth to="/contact">Contact</HashLink>
                </ul>
            </nav>
        </div>
    )
}
export default Header;