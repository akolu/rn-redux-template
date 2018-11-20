import {actions} from '../actions/app';
import router from '../../Router';

const routes = router.getRoutes();

const initialState = {
    routes: routes,
    currentRoute: routes[0]
};

export default function app(state = initialState, action) {
    switch (action.type) {
        case actions.NAVIGATE:
            return Object.assign({}, state, {
                routes: state.routes,
                currentRoute: action.route
            });
        default:
            return state;
    }
}