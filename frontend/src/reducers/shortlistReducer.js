import { SHORTLIST_ADD_ITEM, SHORTLIST_REMOVE_ITEM } from "../constants/shortlistConstants";
export const shortlistReducer =(state = { shortlistItems:[]}, action) => {
    switch (action.type) {
        case SHORTLIST_ADD_ITEM:
            const item = action.payload;
            const existsItem = state.shortlistItems.find((i) => 
            i.property===item.property);
          
            if (existsItem) {
                return {
                    ...state,
                    shortlistItems: state.shortlistItems.map((i)=>
                    i.property === existsItem.property ? item:i),

                };
            } else {
                return {...state, shortlistItems:[...state.shortlistItems, item]};
            }
        case SHORTLIST_REMOVE_ITEM:
            return {
                ...state,
                shortlistItems: state.shortlistItems.filter((i)=> i.property !== action.payload),
            };    
           default: 
           return state; 
    }
};