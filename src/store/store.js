import { createStore, combineReducers } from "redux";
import productsReducer from "./reducers/productsReducer"
import cartReducer from "./reducers/cartReducer"
const store = createStore(combineReducers({ productsReducer, cartReducer }));

export default store