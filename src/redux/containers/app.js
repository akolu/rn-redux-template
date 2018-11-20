import {navigate, pushRoute, popRoute} from '../actions/app';
import {connect} from 'react-redux';
import scene from '../../App';

const mapStateToProps = (state) => {
    return {
        routes: state.app.routes,
        currentRoute: state.app.currentRoute
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (route, navigator) => dispatch(navigate(route, navigator))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(scene);