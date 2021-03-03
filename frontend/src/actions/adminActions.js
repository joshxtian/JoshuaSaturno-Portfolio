import {
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGOUT,
} from '../constants/adminConstants';
import axios from 'axios';


export const login = (username, password) => async (dispatch) =>{
    try {
        dispatch({
            type: ADMIN_LOGIN_REQUEST,
        });

        const config = {
            headers:{
                'Content-Type': 'application/json',
            }
        };

        const { data } = await axios.post("/api/admin/login", {username, password},config);

        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: data,
        });

        localStorage.setItem('adminInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type:ADMIN_LOGIN_FAIL,
            payload:error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        })
    }
} 
export const logout = () => async (dispatch) =>{
    localStorage.removeItem('adminInfo')
    dispatch({
        type:ADMIN_LOGOUT,
    })

}
