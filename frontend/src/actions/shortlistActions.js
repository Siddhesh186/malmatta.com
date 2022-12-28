import axios from 'axios';
import { SHORTLIST_ADD_ITEM, SHORTLIST_REMOVE_ITEM } from '../constants/shortlistConstants';

export const addToShortlist = (id) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/properties/${id}`);

    dispatch ({
        type: SHORTLIST_ADD_ITEM,
        payload: {
            property: data._id,
            location: data.location,
            image:data.image,
            price:data.price,
            type:data.type,
            dimension:data.dimension,
        }
    });
     
    localStorage.setItem('shortlistItems', JSON.stringify(getState().shortlist.shortlistItems))
};

export const removeFromShortlist = (id) => (dispatch, getState) => {
    dispatch({type:SHORTLIST_REMOVE_ITEM, payload: id});

    localStorage.setItem('shortlistItems', JSON.stringify(getState().shortlist.shortlistItems));
}