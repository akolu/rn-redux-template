'use strict';
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DEFAULT_ICON_SIZE = 20;

export default class Button extends Component {
    static propTypes = {
        onClick: PropTypes.func,
        disabled: PropTypes.bool,
        label: PropTypes.string,
        style: PropTypes.oneOf([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
        labelStyle: PropTypes.oneOf([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
        icon: PropTypes.string,
        iconSize: PropTypes.number,
        iconStyle: PropTypes.oneOf([PropTypes.object, PropTypes.arrayOf(PropTypes.object)])
    };

    static defaultProps = {
        disabled: false
    };

    renderIcon() {
        if (this.props.icon) {
            return (
                <Icon name={this.props.icon}
                      size={this.props.iconSize || DEFAULT_ICON_SIZE}
                      style={[styles.icon, this.props.iconStyle]}/>
            );
        }
    }

    renderLabel() {
        if (this.props.label) {
            return (
                <Text style={[styles.label, this.props.labelStyle]}>
                    {this.props.label}
                </Text>
            );
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onClick} disabled={this.props.disabled}>
                <View style={[styles.container, this.props.style]}>
                    {this.renderIcon()}
                    {this.renderLabel()}
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#eeeeff',
        borderWidth: 1,
        borderColor: '#666'
    },
    icon: {
        color: '#333',
        marginRight: 6,
    },
    label: {
        textAlign: 'center',
        color: '#333'
    },
});