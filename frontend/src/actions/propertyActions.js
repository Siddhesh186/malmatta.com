import axios from 'axios';
import {
    PROPERTY_LIST_REQUEST,
    PROPERTY_LIST_SUCCESS,
    PROPERTY_LIST_FAIL,
    PROPERTY_DETAILS_REQUEST,
    PROPERTY_DETAILS_SUCCESS,
    PROPERTY_DETAILS_FAIL,
    PROPERTY_DELETE_REQUEST,
    PROPERTY_DELETE_SUCCESS,
    PROPERTY_DELETE_FAIL,
    PROPERTY_CREATE_REQUEST,
    PROPERTY_CREATE_FAIL,
    PROPERTY_CREATE_SUCCESS,
    PROPERTY_UPDATE_REQUEST,
    PROPERTY_UPDATE_FAIL,
    PROPERTY_UPDATE_SUCCESS,

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

export const deleteProperty = (id) => async (dispatch, getState) => {
    try {
        dispatch({type: PROPERTY_DELETE_REQUEST})

        const {
            userLogin: { userInfo},
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.delete(`/api/properties/${id}`, config);

        dispatch({ type: PROPERTY_DELETE_SUCCESS});

    } catch (err) {
        dispatch({
            type: PROPERTY_DELETE_FAIL,
            payload:
            err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
        });

    }
};

export const createProperty = () => async (dispatch, getState) => {
    try{
        dispatch({type:PROPERTY_CREATE_REQUEST});

        const {
            userLogin:{ userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(`/api/properties`, {}, config);

        dispatch({ type: PROPERTY_CREATE_SUCCESS, payload: data});

    } catch (err) {
        dispatch({
            type: PROPERTY_CREATE_FAIL,
            payload:
            err.repsonse && err.response.data.message
            ? err.response.data.message
            : err,
        });

    }
};

export const updateProperty = (property) => async(dispatch, getState) => {
    try {
        dispatch({type:PROPERTY_UPDATE_REQUEST});
        const {
            userLogin:{ userInfo},
        } = getState();

        const config = {
           headers: {
            'Content-Type': 'application/json',
            Authorization:`Bearer ${userInfo.token}`,
           },
        };

        const { data } = await axios.put(
            `/api/properties/${property._id}`,
            property,
            config
        );

        dispatch({ type: PROPERTY_UPDATE_SUCCESS, payloaad:data});

    } catch (err) {
        dispatch({
            type: PROPERTY_UPDATE_FAIL,
            payload: 
            err.response && err.response.data.message
            ? err.message.data.message
            : err.message
        });

    }
};