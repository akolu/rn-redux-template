import {
    getInstructions,
    getAsyncResult
} from '../actions/home';
import {connect} from 'react-redux';
import scene from '../../scenes/Home';

const mapStateToProps = (state) => {
    return {
        text: state.home.text,
        data: state.home.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getInstructions: () => dispatch(getInstructions()),
        getAsyncResult: () => dispatch(getAsyncResult()),
    };
};

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(scene);

export default Home;