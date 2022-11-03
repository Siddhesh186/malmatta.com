import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { propertyListReducer } from './reducers/propertyReducer'; 

const reducer = combineReducers({
    propertyList: propertyListReducer,
});

const initialState ={}

const middlewares =[thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

 export default store;