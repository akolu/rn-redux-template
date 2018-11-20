import SideMenu from '../SideMenu';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {shallow} from 'enzyme';

describe('SideMenu tests', () => {
    const items = [
        {id: 0, label: 'foo', scene: 'Foo', icon: 'assessment'},
        {id: 1, label: 'bar', scene: 'Bar', icon: 'settings-applications'}];
    const scene = 'Bar';
    let navigate;

    beforeEach(done => {
        navigate = jest.fn();
        done();
    });

    function setup(arr) {
        return shallow(<SideMenu items={arr} scene={scene} navigate={navigate}/>);
    }


    it('Should render correct number of menuItems', done => {
        const wrapper = setup(items);
        expect(wrapper.find('TouchableOpacity').length).toBe(2);
        done();
    });

    it('Should render Icon and uppercase Text for each menu item', done => {
        const menuItem = items[0];
        const wrapper = setup([menuItem]);
        expect(wrapper.find('TouchableOpacity').containsMatchingElement(<Icon name='assessment'/>));
        expect(wrapper.find('TouchableOpacity').containsMatchingElement(<Text>FOO</Text>)).toBe(true);
        done();
    });

    it('Should send navigate event on press event', done => {
        const menuItem = items[0];
        const wrapper = setup([menuItem]);
        wrapper.find('TouchableOpacity').simulate('press');
        expect(navigate).toBeCalledWith(menuItem);
        done();
    });

    it('Should not send navigate event if scene is not defined', done => {
        const menuItem = Object.assign({}, items[0]);
        delete menuItem.scene;
        const wrapper = setup([menuItem]);
        wrapper.find('TouchableOpacity').simulate('press');
        expect(navigate).not.toBeCalled();
        done();
    });
});