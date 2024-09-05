import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import recipeReducer from './reducers/recipeReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
    recipes: recipeReducer,
    user: userReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
