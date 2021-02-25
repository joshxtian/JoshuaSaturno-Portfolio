import React from 'react';
import './Projects.css';
import {Container,Row,Col,Image,ListGroup} from 'react-bootstrap';

const Projects = () => {
    return (
        <Container className="px-0 py-5 my-5">

            <Row>
                <h1 className="section__title w-100 text-center display-4 mb-5">Projects</h1>
                <Col>
                    <div className="project__card">
                        
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects
