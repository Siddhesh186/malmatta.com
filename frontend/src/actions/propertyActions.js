import axios from 'axios';
import {
    PROPERTY_LIST_REQUEST,
    PROPERTY_LIST_SUCCESS,
    PROPERTY_LIST_FAIL,
    PROPERTY_DETAILS_REQUEST,
    PROPERTY_DETAILS_SUCCESS,
    PROPERTY_DETAILS_FAIL,
} from '../constants/propertyConstants';

export const listProperties = () => async (dispatch)=> {
    try {
        dispatch({type:PROPERTY_LIST_REQUEST});

        const { data } = await axios.get('/api/properties');
        dispatch({ type:PROPERTY_LIST_SUCCESS, payload :data}) 
    } catch (err) {
        dispatch({
            type:PROPERTY_LIST_FAIL,
            payload:
             err.response && err.response.data.message
             ? err.response.data.message
             : err.message
        });

    }
};

export const listPropertyDetails = (id) => async (dispatch)=> {
    try {
        dispatch({ type: PROPERTY_DETAILS_REQUEST});

        const {data} = await axios.get(`/api/properties/${id}`);

        dispatch({type: PROPERTY_DETAILS_SUCCESS, payload: data });
    } catch (err){
        dispatch ({
            type: PROPERTY_DETAILS_FAIL,
            payload:
              err.repsonse && err.response.data.message 
              ? err.response.data.message
              : err.message,
        });
    }
};