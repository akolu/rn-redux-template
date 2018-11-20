import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import app from './reducers/app';
import home from './reducers/home';
import thunk from 'redux-thunk';
import {readyStatePromise} from './middleware/readyStatePromise';

const reducer = combineReducers({
    app,
    home,
    // [...]
});

const store = createStore(reducer, {}, applyMiddleware(thunk, readyStatePromise));

export default store;