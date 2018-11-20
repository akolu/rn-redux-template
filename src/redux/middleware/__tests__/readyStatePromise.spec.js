import {results} from '../readyStatePromise';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {readyStatePromise} from '../readyStatePromise';

describe('ReadyStatePromise middleware tests', () => {
    const mockStore = configureMockStore([thunk, readyStatePromise]);
    const ACTION = 'ACTION';
    const ACTION_ASYNC = 'ACTION_ASYNC';

    it('Actions without promise should not be changed', done => {
        const store = mockStore({});
        const action = {type: ACTION, text: 'Not async action'};

        store.dispatch(action);
        expect(store.getActions()).toEqual([action]);
        done();
    });

    it('Actions with promise should dispatch PENDING and SUCCESS events on Promise resolve', async(done) => {
        const result = {text: 'Async action resolved'};
        const expectedActions = [
            {type: ACTION_ASYNC, status: results.ASYNC_RESULT_PENDING},
            {type: ACTION_ASYNC, status: results.ASYNC_RESULT_SUCCESS, result: result}];
        const store = mockStore({});

        await store.dispatch((dispatch) => dispatch({type: ACTION_ASYNC, promise: Promise.resolve(result)}));
        expect(store.getActions()).toEqual(expectedActions);
        done();
    });

    it('Actions with promise should dispatch PENDING and ERROR events on Promise reject', async(done) => {
        const error = new Error('Async action rejected');
        const expectedActions = [
            {type: ACTION_ASYNC, status: results.ASYNC_RESULT_PENDING},
            {type: ACTION_ASYNC, status: results.ASYNC_RESULT_ERROR, error: error}];
        const store = mockStore({});

        await store.dispatch((dispatch) => dispatch({type: ACTION_ASYNC, promise: Promise.reject(error)}));
        expect(store.getActions()).toEqual(expectedActions);
        done();
    });
});
