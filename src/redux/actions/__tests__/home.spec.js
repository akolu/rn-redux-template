'use strict';
import {
    actions,
    getInstructions,
    getAsyncResult
} from '../home';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('Home action tests', () => {
    const mockStore = configureMockStore([thunk]);

    it('.getInstructions should dispatch action with correct type and text', done => {
        const text = 'Click button to get Promise data';
        const store = mockStore({});

        store.dispatch(getInstructions());
        const dispatchedActions = store.getActions();

        expect(dispatchedActions.length).toBe(1);
        expect(dispatchedActions[0].type).toEqual(actions.GET_TEXT);
        expect(dispatchedActions[0].text).toEqual(text);
        done();
    });

    it('.getTimeAsync should dispatch action with correct type and promise payload', async done => {
        const text = 'Hooray! This text was resolved from Promise.';
        const store = mockStore({});

        store.dispatch(getAsyncResult());
        const dispatchedActions = store.getActions();

        expect(dispatchedActions.length).toBe(1);
        expect(dispatchedActions[0].type).toEqual(actions.GET_DATA_ASYNC);
        expect(await dispatchedActions[0].promise).toEqual(text);
        done();
    });
});