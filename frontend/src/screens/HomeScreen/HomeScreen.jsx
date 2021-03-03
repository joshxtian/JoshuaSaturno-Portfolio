import React,{useEffect} from 'react';
import './HomeScreen.css';
import Jumbotron from '../../sections/Jumbotron/Jumbotron';
import About from '../../sections/About/About';
import Skills from '../../sections/Skills/Skills';
import Projects from '../../sections/Projects/Projects';
import {Container,Row,Col,Image,ListGroup} from 'react-bootstrap';
import Contact from '../../sections/Contact/Contact';
import {useSelector, useDispatch} from 'react-redux';
const HomeScreen = () => {
    return (
        <>
            <div className="homescreen px-xl-5 px-lg-3 px-lg-3 my-5">
                <div id="home" className="section my-5">
                    <Jumbotron/>
                </div>
                <div id="about" className="section my-5">
                    <About/>
                </div>
                <div id="skills" className="section-fluid my-5">
                    <Skills/>
                </div>
                <div id="projects" className="section-fluid my-5">
                    <Projects/>
                </div>
            </div>
            <div id="contact" className="section-dark mt-5">
                <Contact/>
            </div>
        </>
    )
}

export default HomeScreen
