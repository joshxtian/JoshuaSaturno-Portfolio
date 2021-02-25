import React, {useState} from 'react';
import './Contact.css';
import {Link} from 'react-router-dom';
import {Container,Row,Col,Form} from 'react-bootstrap';


const Contact = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <Container className=" px-0 py-5 mx-auto my-5 contact">
            
            <Form fluid className="contact__form w-50 mx-auto py-5 px-5">
                <h1 className="section__title mb-5">Contact Me</h1>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
               

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"/>
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control className="contact__textarea" as="textarea" rows={isExpanded ? 5 : 1} onClick={()=>setIsExpanded(true)} type="text"/>
                </Form.Group>
               
                

                <button type="submit" className="btn btn-block btn-primary">Send Message</button>
            </Form>
        </Container>
    )
}

export default Contact;
