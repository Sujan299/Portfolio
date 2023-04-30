import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Header from './components/Header';
import "./styles/Header.scss";
import Home from './components/Home';
import "./styles/Home.scss";
import About from "./components/About";
import "./styles/About.scss";
import Contact from "./components/Contact";
import "./styles/Contact.scss";
import Footer from './components/Footer';
import "./styles/Footer.scss";
function App(){
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}
export default App;