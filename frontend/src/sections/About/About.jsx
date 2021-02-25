import React from 'react';
import './About.css';
import {Container,Row,Col,Image,ListGroup} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
const About = () => {
    return (
    <Container className="px-0 py-5 my-5">
        
        <Row>
            <Col className="about__photo-column" md={7}>
                <Image fluid src="/src/image/creativeshot.png"/>
            </Col>
            <Col md={5} sm={12} className="py-5">
                <h1 className="section__title display-4">About me</h1>
                <p className="about__paragraph lead">I am a Information Tech college student from the Philippines, I aspire to be a full-stack Web Developer one day. Even though I am still in college, I have developed strong work ethic, passion , and dedication to programming.</p>
                <p className="about__paragraph lead">I love sipping coffee and listening to Metallica while coding, by the way.</p>
                <Container className="about__socialList py-3">
                    <Row>
                        <Col md={{span:2,offset:1}} sm={6}>
                        <a id="fb" href="https://www.facebook.com/JoshuaStorm99">
                            <i className="about__socialLinks fab fa-facebook-square"></i>
                        </a>
                        </Col>
                        <Col md={{span:2}} sm={6}>
                            <a id="ig" href="https://www.instagram.com/joshxtian/"> <i className="about__socialLinks fab fa-instagram"></i></a>
                        </Col>
                        <Col md={{span:2}} sm={4}>
                            <a id="tw" href="https://twitter.com/joshxtian"> <i className="about__socialLinks fab fa-twitter-square"></i></a>
                       </Col>
                        <Col md={{span:2}} sm={4}>
                            <a id="li" href="https://www.linkedin.com/in/joshua-christian-saturno-66a699203/"><i className="about__socialLinks fab fa-linkedin"></i></a>
                        </Col>
                        <Col md={{span:2}} sm={4}>
                            <a id="gh" href="https://github.com/joshxtian"> <i className="about__socialLinks fab fa-github-square"></i></a>
                       </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    </Container>
    )
}

export default About
