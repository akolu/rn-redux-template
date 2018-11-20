import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Details extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>This is a subview which cannot be accessed via side menu.</Text>
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