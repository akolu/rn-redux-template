import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class SideMenu extends Component {

    isActive(item) {
        return item.scene === this.props.scene;
    }

    navigateTo(route) {
        if (route.scene) {
            this.props.navigate(route);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.items.map(i => {
                    return (
                        <TouchableOpacity style={{height: 50}} key={i.id} onPress={() => this.navigateTo(i)}>
                            <View style={[styles.menuLink, this.isActive(i) && styles.active]}>
                                <View style={styles.iconWrapper}>
                                    <Icon style={styles.icon} name={i.icon} size={32} color={'#000'}/>
                                </View>
                                <Text style={styles.label}>{i.label.toUpperCase()}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        justifyContent: 'space-between'
    },
    menuLink: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 0,
        borderLeftColor: '#f88',
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    active: {
        borderLeftWidth: 5,
        marginLeft: 5
    },
    iconWrapper: {
        width: 60,
        alignItems: 'center',
    },
    icon: {
        flex: 1,
        textAlignVertical: 'center',
        alignItems: 'center',
    },
    label: {
        flex: 1,
        textAlignVertical: 'center',
        color: '#000',
        fontSize: 17
    }
});