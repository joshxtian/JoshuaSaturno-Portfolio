import React,{useEffect,useState} from 'react';
import './MessageListScreen.css';
import {Button,Row,Col,ListGroup, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import {useDispatch, useSelector} from 'react-redux';
import { listMails ,deleteMail} from '../../actions/mailActions';

const MessageListScreen = ({history}) => {
    const dispatch = useDispatch();


    const adminLogin = useSelector(state=>state.adminLogin);
    const {adminInfo} = adminLogin;

    const mailList = useSelector(state=>state.mailList);
    const {loading,error,mails} = mailList;
    
    const mailDelete = useSelector(state=>state.mailDelete);
    const {loading:loadingDelete,success:successDelete, error:errorDelete} = mailDelete;
   
    useEffect(() => {
        if(!adminInfo){
            history.push("/");
        } else{
            dispatch(listMails());
        }
    }, [dispatch,successDelete]);

    const onClickHandler = (id) =>{
        dispatch(deleteMail(id));
    }
    return (
        <div className="screen-long px-xl-5 px-lg-3 px-lg-3 mb-5">
          
                <div className="px-0 py-5 mb-5 container">
                <Link to="/admin">
                    <Button variant="dark"> <i className="fas fa-chevron-left"></i> Go Back</Button>
                </Link>
                <h1 className="my-5">Messages</h1>
                <Table striped bordered hover responsive className="table-sm">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Message</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            {mails.map(mail=>{
                                return <tr key={mail._id}>
                                    <td>{mail._id}</td>
                                    <td>{mail.name}</td>
                                    <td><a href={mail.email}>{mail.email}</a></td>
                                    <td>{mail.message}</td>
                                    <td>
                                        <Button variant="danger" onClick={()=>onClickHandler(mail._id)}><i className="far fa-trash-alt" ></i></Button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
            </div>
            
            
        </div>
    )
}

export default MessageListScreen;
