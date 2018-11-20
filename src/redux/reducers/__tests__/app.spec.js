'use strict';
import {actions} from '../../actions/app';
import router from '../../../Router';
import reducer from '../app';

describe('App reducer tests', () => {

    const routes = router.getRoutes();
    const initialState = {
        routes: routes,
        currentRoute: routes[0]
    };

    it('Should return initial state', (done) => {
        expect(reducer(undefined, {})).toEqual(initialState);
        done();
    });

    it('Should set currentRoute on NAVIGATE', done => {
        const action = {type: actions.NAVIGATE, route: routes[1]};
        const newState = reducer(undefined, action);
        expect(newState.routes).toEqual(initialState.routes);
        expect(newState.currentRoute).toEqual(action.route);
        done();
    });
});