import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Settings extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Static content</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    text: {
        marginBottom: 25
    }
});