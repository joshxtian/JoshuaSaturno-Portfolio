import React from 'react';
import './HomeScreen.css';
import Jumbotron from '../../sections/Jumbotron/Jumbotron';
import About from '../../sections/About/About';
import Skills from '../../sections/Skills/Skills';
import Projects from '../../sections/Projects/Projects';
import {Container,Row,Col,Image,ListGroup} from 'react-bootstrap';

const HomeScreen = () => {
    return (
        <div className="px-5 my-5">
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
    )
}

export default HomeScreen
