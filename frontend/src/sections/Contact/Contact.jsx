import React, {useState} from 'react';
import './Contact.css';
import {Link} from 'react-router-dom';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';
import {sendMail} from '../../actions/mailActions';
import {useDispatch, useSelector} from 'react-redux';


const Contact = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const mailSend = useSelector(state=>state.mailSend);
    const {loading,success, error} = mailSend;
    const submitHandler = () =>{
        dispatch(sendMail(name,email,message));
    }
    
    return (
        <Container className="mx-auto my-5 contact">
            <div className="contact__content">
                {loading ? <div className="center-Loader"><Loader/></div> : 
                    <>
                        <h1 className="contact__header section__title mb-4">Contact Me</h1>
                        <Form onSubmit={submitHandler} className="w-50 mx-auto">
                            <Form.Group controlId="name">
                            <Form.Control placeholder="Your Name"
                            value={name} onChange={e=>setName(e.target.value)} type="text"/>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Control placeholder="Your Email"
                            value={email} onChange={e=>setEmail(e.target.value)}
                            type="email"/>
                        </Form.Group>
                        <Form.Group controlId="message">
                            <Form.Control placeholder="Your Message" 
                            value={message}
                            onChange={e=>{
                            setMessage(e.target.value);
                            }} className="contact__textarea" as="textarea" rows={5} type="text"/>
                        </Form.Group>
                        {error && <Message variant="danger">{error}</Message>}
                        {success && <Message variant="success">Message Sent!</Message>}
                        <Button className="contact__submit float-right" variant="outline-light" type="submit">Submit</Button>
                </Form>
                </>
                }
                
            </div>
           
        </Container>
    )
}

export default Contact;
