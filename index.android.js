import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import App from './src/redux/containers/app';

class RNTemplate extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('RNTemplate', () => RNTemplate);
