import {
    MAIL_SEND_REQUEST,
    MAIL_SEND_SUCCESS,
    MAIL_SEND_FAIL,
    MAIL_SEND_RESET,
    MAIL_LIST_REQUEST,
    MAIL_LIST_SUCCESS,
    MAIL_LIST_FAIL,
    MAIL_DELETE_REQUEST,
    MAIL_DELETE_SUCCESS,
    MAIL_DELETE_FAIL,
} from '../constants/mailConstants';
import axios from 'axios';

const sendMail = (name,email,message) => async (dispatch) =>{
    try {
        dispatch({
            type: MAIL_SEND_REQUEST,
        });
            
        const {data} = await axios.post(`/api/mail`,{name,email,message});

        dispatch({
            type: MAIL_SEND_SUCCESS,
            payload:data,
        });

    } catch (error) {
        dispatch({
            type:MAIL_SEND_FAIL,
            payload:error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        })
    }
}

const listMails = () => async (dispatch,getState) =>{
    try {
        dispatch({type:MAIL_LIST_REQUEST});

        const {adminLogin:{adminInfo}} = getState(); 

        const config = {
            headers:{
                'Content-Type': 'application/json',
                Authorization : `Bearer ${adminInfo.token}`,
            }
        };


        const {data} = await axios.get("/api/mail",config);

        dispatch({
            type:MAIL_LIST_SUCCESS,
            payload:data,
        })

    } catch (error) {
        dispatch({
            type:MAIL_LIST_FAIL,
            payload:error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        })
    }
}

const deleteMail = (id) => async (dispatch,getState) =>{
    try {
        dispatch({type:MAIL_DELETE_REQUEST});

        const {adminLogin:{adminInfo}} = getState(); 

        const config = {
            headers:{
                'Content-Type': 'application/json',
                Authorization : `Bearer ${adminInfo.token}`,
            }
        };


        await axios.delete(`/api/mail/${id}`,config);

        dispatch({
            type:MAIL_DELETE_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:MAIL_DELETE_FAIL,
            payload:error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        })
    }
}

export {sendMail,listMails,deleteMail}