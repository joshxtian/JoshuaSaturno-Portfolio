import {
    MAIL_SEND_REQUEST,
    MAIL_SEND_SUCCESS,
    MAIL_SEND_FAIL,
    MAIL_SEND_RESET,
    MAIL_LIST_REQUEST,
    MAIL_LIST_SUCCESS,
    MAIL_LIST_FAIL,
    MAIL_LIST_RESET,
    MAIL_DELETE_REQUEST,
    MAIL_DELETE_SUCCESS,
    MAIL_DELETE_FAIL,
    MAIL_DELETE_RESET,
} from '../constants/mailConstants';

export const mailSendReducer = (state={},action) => {
    switch(action.type){
        case MAIL_SEND_REQUEST:
            return {
                loading:true,
            }
        case MAIL_SEND_SUCCESS:
            return {
                loading: false,
                success:true,
                mail:action.payload,
            }
        case MAIL_SEND_FAIL:
            return {
                loading:false,
                error: action.payload,
            }
        case MAIL_SEND_RESET:
           return {

            }
        default:
            return state
    }
}

export const mailListReducer = (state={mails:[]},action) => {
    switch(action.type){
        case MAIL_LIST_REQUEST:
            return {
                loading:true,
                mails:[]
            }
        case MAIL_LIST_SUCCESS:
            return {
                loading: false,
                mails:action.payload,
            }
        case MAIL_LIST_FAIL:
            return {
                loading:false,
                error: action.payload,
            }
        case MAIL_LIST_RESET:
           return {

            }
        default:
            return state
    }
}

export const mailDeleteReducer = (state={},action) =>{
    switch(action.type){
        case MAIL_DELETE_REQUEST:
            return {
                loading:true,
            }
        case MAIL_DELETE_SUCCESS:
            return {
                loading: false,
                success:true,
            }
        case MAIL_DELETE_FAIL:
            return {
                loading:false,
                error: action.payload,
            }
        case MAIL_DELETE_RESET:
           return {

            }
        default:
            return state
    }
}