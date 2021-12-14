import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from './reducers/productReducers'

//ACTION 
const reducer = combineReducers({
  productList: productListReducer,
});

const initialState = {};

const middleware = [thunk];

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//COMPOSE_WITH_DEVTOOLS REPLACES ABOVE
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;