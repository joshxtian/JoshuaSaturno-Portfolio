import React, {useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import './AdminLoginScreen.css';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { login } from '../../actions/adminActions';

const AdminLoginScreen = ({location, history}) => {
    const dispatch = useDispatch();


    const adminLogin = useSelector(state=>state.adminLogin);
    const {loading, error, adminInfo} = adminLogin;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if(adminInfo){
            history.push("/");
        }
        
    }, [history, adminInfo])
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(login(username,password));
    }
    return (
        <div className="login px-xl-5 px-lg-3 px-lg-3">
            <div className="login__content">

                
                <div className="login__goback w-50 mx-auto my-3">
                    <h1 className="text-danger">Not admin?</h1>
                    <Link to="/">
                        <Button variant="danger">Go Back</Button>
                    </Link>
                </div>
                <Form fluid onSubmit={submitHandler}className="contact__form w-50   mx-auto py-5 px-5">
                    <h1 className="section__title mb-5">Login</h1>
                    <Form.Group controlId="username">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control value={username} onChange={e=>setUsername(e.target.value)} type="text"/>
                    </Form.Group>


                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} onChange={e=>setPassword(e.target.value)} type="password"/>
                    </Form.Group>




                    <button type="submit" className="btn    btn-block btn-primary">Login</button>
                </Form>
            </div>
            
        </div>
    )
}

export default AdminLoginScreen
