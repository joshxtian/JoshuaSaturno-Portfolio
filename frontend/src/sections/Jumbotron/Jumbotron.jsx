import React from 'react';
import './Jumbotron.css';
import {Container,Row,Col,Image,ListGroup} from 'react-bootstrap';

const Jumbotron = () => {
    return (
        <Container className="px-0 py-5 my-5">
            <Row>
                <Col md={6}>
                    <h1 className="section__title display-4 mb-2 fluid">Joshua Saturno.</h1>
                    <p className="jumbotron__lead lead fluid">Hello My Name Is Joshua Christian Saturno, I am a student and an aspiring  <span className="jumbotron__underlined">Full-stack Developer</span>.</p>

                    <ListGroup variant="flush">
                        <ListGroup.Item className="p-0 jumbotron__list-item"> <p className="jumbotron__lead lead jumbotron-list">Front-End</p></ListGroup.Item>
                        <ListGroup.Item className="p-0 jumbotron__list-item"> <p className="jumbotron__lead lead jumbotron-list">Web-Design</p></ListGroup.Item>
                        <ListGroup.Item className="p-0 jumbotron__list-item"> <p className="jumbotron__lead lead jumbotron-list">Back-End</p></ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={6}>
                    <Image src="/src/image/me-bordered-shadowed.png" fluid/>
                </Col>
            </Row>
        </Container>
    )
}

export default Jumbotron;
