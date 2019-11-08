import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';

//reducers
import RestaurantReducer from "./reducers/RestaurantReducer";
import LocationReducer from "./reducers/LocationReducer";
import LoadingReducer from "./reducers/LoadingReducer";

/**
 * function to combine all reducers
 */
const reducers = combineReducers({
    restaurant : RestaurantReducer,
    location : LocationReducer,
    loading : LoadingReducer
})

/**
 * function to create redux store
 */
const store = createStore(reducers, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()))

export default store;