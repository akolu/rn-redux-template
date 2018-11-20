'use strict';
import {actions} from '../../actions/home';
import {results} from '../../middleware/readyStatePromise';
import reducer from '../home';

describe('Home reducer tests', () => {

    const initialState = {
        text: "",
        data: {
            status: results.ASYNC_RESULT_NONE,
            result: null,
            error: null,
        }
    };

    it('Should return initial state', (done) => {
        expect(reducer(undefined, {})).toEqual(initialState);
        done();
    });

    it('Should return text', (done) => {
        const action = {type: actions.GET_TEXT, text: 'foo'};
        const newState = reducer(undefined, action);
        expect(newState.text).toEqual(action.text);
        expect(newState.data).toEqual(initialState.data);
        done();
    });

    it('Should set data for data object and set error to null on successful result', done => {
        const action = {
            type: actions.GET_DATA_ASYNC,
            status: results.ASYNC_RESULT_SUCCESS,
            result: 'Promise was resolved with this text'
        };
        const oldState = {data: {...initialState.data, error: new Error('foo')}};
        const newState = reducer(oldState, action);
        expect(newState.data.status).toEqual(results.ASYNC_RESULT_SUCCESS);
        expect(newState.data.result).toEqual(action.result);
        expect(newState.data.error).toEqual(null);
        done();
    });

    it('Should preserve old data and set error on failed result', done => {
        const action = {
            type: actions.GET_DATA_ASYNC,
            status: results.ASYNC_RESULT_ERROR,
            error: new Error('foo')
        };
        const oldState = {data: {...initialState.data, result: 'foo'}};
        const newState = reducer(oldState, action);
        expect(newState.data.status).toEqual(results.ASYNC_RESULT_ERROR);
        expect(newState.data.result).toEqual(oldState.data.result);
        expect(newState.data.error).toEqual(action.error);
        done();
    });
});