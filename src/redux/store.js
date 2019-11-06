import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';

/**
 * function to combine all reducers
 */
const reducers = combineReducers({

})

/**
 * function to create redux store
 */
const store = createStore(reducers, applyMiddleware(thunk));

export default store;