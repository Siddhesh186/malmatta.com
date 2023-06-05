import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { propertyListReducer,propertyUpdateReducer, propertyDetailsReducer, propertyDeleteReducer, propertyCreateReducer } from './reducers/propertyReducer'; 
import { userLoginReducer,userListReducer, userRegisterReducer,userDeleteReducer, userDetailsReducer, userUpdateProfileReducer,userUpdateReducer } from './reducers/userReducers';
import { shortlistReducer } from './reducers/shortlistReducer';

const reducer = combineReducers({
    propertyList: propertyListReducer,
    propertyDetails: propertyDetailsReducer,
    propertyDelete:propertyDeleteReducer,
    propertyCreate:propertyCreateReducer,
    propertyUpdate:propertyUpdateReducer,
    shortlist : shortlistReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList:userListReducer,
    userDelete: userDeleteReducer,
    userUpdate:userUpdateReducer,
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