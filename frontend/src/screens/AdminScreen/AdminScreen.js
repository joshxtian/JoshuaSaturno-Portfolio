import React,{useState,useEffect} from 'react';
import './AdminScreen.css';
import {Link} from 'react-router-dom';
import {Button,Row,Col,ListGroup} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux';


const AdminScreen = ({history,match}) => {
    const dispatch = useDispatch();
    
    const adminLogin = useSelector(state=>state.adminLogin);
    const {adminInfo} = adminLogin;

    useEffect(() => {
        if(!adminInfo){
            history.push("/");
        }
    }, [history]);

    return (
        <div className="screen-long px-xl-5 px-lg-3 px-lg-3 mb-5">
            <div className="px-0 py-5 mb-5 container">
                <Link to="/">
                    <Button variant="dark"> <i className="fas fa-chevron-left"></i> Go Back</Button>
                </Link>
                <Row className="my-5">
                    <Col md={6}>
                        <h1 className="text-center">Sections</h1>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Link to="/admin/projects">
                                    <h1 className="admin__sectionList">Projects</h1>
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <Link to="/admin/skills">
                                    <h1 className="admin__sectionList">Skills</h1>
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={6}>
                        <h1 className="text-center">Account</h1>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Link to="/admin/messages">
                                    <h1 className="admin__sectionList">Messages</h1>
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                
            </div>
        </div>
    )
}

export default AdminScreen
