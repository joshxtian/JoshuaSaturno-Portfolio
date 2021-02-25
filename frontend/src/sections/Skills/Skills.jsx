import React from 'react';
import './Skills.css';
import {Container,Row,Col,Image,ListGroup} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import SkillCard from '../../components/SkillCard/SkillCard';
const Skills = () => {
    return (
    <Container className="px-0 py-5 my-5">  
        
        <Row>
            <h1 className="section__title w-100 text-center display-4 mb-5">My Skills</h1>
            
            
                <SkillCard md={3} title="html" image="/src/image/html.png"/>
                <SkillCard md={3} title="css" image="/src/image/css.png"/>
                <SkillCard md={3} title="javascript" image="/src/image/js.png"/>
                <SkillCard md={3} title="reactjs" image="/src/image/react.png"/>
                <SkillCard md={3} title="JQuery" image="/src/image/jquery.png"/>
                <SkillCard md={3} title="bootstrap" image="/src/image/bootstrap.png"/>
                <SkillCard md={3} title="github" image="/src/image/github.png"/>
                <SkillCard md={3} title="nodejs" image="/src/image/node.png"/>
                <SkillCard md={4} title="Postman" image="/src/image/postman.png"/>
                <SkillCard md={4} title="MongoDB" image="/src/image/mongodb.png"/>
                <SkillCard md={4} title="Firebase" image="/src/image/firebase.png"/>
            
        </Row>
    </Container>
    )
}

export default Skills
