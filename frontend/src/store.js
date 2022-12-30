import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { propertyListReducer, propertyDetailsReducer } from './reducers/propertyReducer'; 
import { userLoginReducer, userRegisterReducer, userDetailsReducer } from './reducers/userReducers';
import { shortlistReducer } from './reducers/shortlistReducer';

const reducer = combineReducers({
    propertyList: propertyListReducer,
    propertyDetails: propertyDetailsReducer,
    shortlist : shortlistReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    
});

const shortlistItemsFromStorage =
 
 localStorage.getItem('shortlistItems')
   ? JSON.parse(localStorage.getItem('shortlistItems'))
   : [];

   

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState ={
    shortlist: {shortlistItems: shortlistItemsFromStorage},
    userLogin: { userInfo: userInfoFromStorage },
}

const middlewares =[thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

 export default store;