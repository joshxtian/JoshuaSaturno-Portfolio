import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const SocialLinks = () => {
    return (
        <Container className="about__socialList py-3">
                    <Row>
                        <Col xs={3}>
                        <a id="fb" href="https://www.facebook.com/JoshuaStorm99">
                            <i className="about__socialLinks fab fa-facebook-square"></i>
                        </a>
                        </Col>
                        <Col xs={3}>
                            <a id="ig" href="https://www.instagram.com/joshxtian/"> <i className="about__socialLinks fab fa-instagram"></i></a>
                        </Col>
                        <Col xs={3}>
                            <a id="li" href="https://www.linkedin.com/in/joshua-christian-saturno-66a699203/"><i className="about__socialLinks fab fa-linkedin"></i></a>
                        </Col>
                        <Col xs={3}>
                            <a id="gh" href="https://github.com/joshxtian"> <i className="about__socialLinks fab fa-github-square"></i></a>
                       </Col>
                    </Row>
                </Container>
    )
}

export default SocialLinks
