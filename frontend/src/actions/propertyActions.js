import axios from 'axios';
import {
    PROPERTY_LIST_REQUEST,
    PROPERTY_LIST_SUCCESS,
    PROPERTY_LIST_FAIL,
} from '../constants/propertyConstants';

export const listProperties = () => async (dispatch)=> {
    try {
        dispatch({type:PROPERTY_LIST_REQUEST});

        const { data } = await axios.get('/api/products');
        dispatch({ type:PROPERTY_LIST_SUCCESS, payload:data}) 
    } catch (err) {
        dispatch({
            type:PROPERTY_LIST_FAIL,
            error:
             err.response && err.response.data.message
             ? err.response.data.message
             : err.message
        });

    }
};