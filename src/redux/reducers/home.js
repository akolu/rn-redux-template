import {results} from '../middleware/readyStatePromise';
import {actions} from '../actions/home';

const initialState = {
    text: "",
    data: {
        status: results.ASYNC_RESULT_NONE,
        result: null,
        error: null,
    }
};

export default function home(state = initialState, action) {
    switch (action.type) {
        case actions.GET_TEXT:
            return Object.assign({}, state, {
                text: action.text
            });
        case actions.GET_DATA_ASYNC:
            return Object.assign({}, state, {
                data: {
                    status: action.status,
                    result: action.result || state.data.result,
                    error: action.error || null
                }
            });
        default:
            return state;
    }
}