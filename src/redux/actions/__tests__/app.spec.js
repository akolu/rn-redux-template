'use strict';
import {
    actions,
    navigate,
} from '../app';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('App action tests', () => {
    const mockStore = configureMockStore([thunk]);

    it('.navigate should dispatch action with correct type and route', done => {
        const selectedRoute = {scene: 'Home', label: 'Home', icon: 'home'};
        const store = mockStore({});

        store.dispatch(navigate(selectedRoute));
        const dispatchedActions = store.getActions();

        expect(dispatchedActions.length).toBe(1);
        expect(dispatchedActions[0].type).toEqual(actions.NAVIGATE);
        expect(dispatchedActions[0].route).toEqual(selectedRoute);
        done();
    });
});