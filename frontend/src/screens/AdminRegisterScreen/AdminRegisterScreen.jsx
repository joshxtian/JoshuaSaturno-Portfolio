import React from 'react';
import './AdminRegisterScreen.css';
import {Form} from 'react-bootstrap';

const AdminRegisterScreen = () => {
    return (
        <div className="login px-xl-5 px-lg-3 px-lg-3 my-5">
            <Form fluid className="contact__form w-50 mx-auto py-5 px-5">
                <h1 className="section__title mb-5">Register</h1>
                <Form.Group controlId="username">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
               

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>

                <button type="submit" className="btn btn-block btn-primary">Register</button>
            </Form>
        </div>
    )
}

export default AdminRegisterScreen;
