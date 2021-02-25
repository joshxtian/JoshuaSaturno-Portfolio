import React from 'react';
import './Projects.css';
import {Link} from 'react-router-dom';
import {Container,Row,Col,Image,ListGroup} from 'react-bootstrap';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Projects = () => {
    
    return (
        <Container className="px-0 py-5 my-5">
            

            <Row>
                <h1 className="section__title w-100 text-center display-4 mb-5">Projects</h1>

                <ProjectCard id="123" image="/src/image/greenbay-logo.png" title="Project 1" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus nesciunt quam dolorum quaera"/>
                <ProjectCard id="123" image="/src/image/creativeshot.png" title="Project 1" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus nesciunt quam dolorum quaera"/>
                <ProjectCard id="123" image="/src/image/creativeshot.png" title="Project 1" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus nesciunt quam dolorum quaera"/>
                <ProjectCard id="123" image="/src/image/creativeshot.png" title="Project 1" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus nesciunt quam dolorum quaera"/>
                <ProjectCard id="123" image="/src/image/creativeshot.png" title="Project 1" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus nesciunt quam dolorum quaera"/>
                <ProjectCard id="123" image="/src/image/creativeshot.png" title="Project 1" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus nesciunt quam dolorum quaera"/>
               
               
            </Row>
        </Container>
    )
}

export default Projects
