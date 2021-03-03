import {
    SKILL_LIST_REQUEST,
    SKILL_LIST_SUCCESS,
    SKILL_LIST_FAIL,
} from '../constants/skillConstants';
import axios from 'axios';


export const listSkills = () => async (dispatch) =>{
    try {
        dispatch({
            type: SKILL_LIST_REQUEST,
        });

        const config = {
            headers:{
                'Content-Type': 'application/json',
            }
        };

        const { data } = await axios.get("/api/skills",config);

        dispatch({
            type: SKILL_LIST_SUCCESS,
            payload: data,
        });


    } catch (error) {
        dispatch({
            type:SKILL_LIST_FAIL,
            payload:error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        })
    }
} 
