'use strict';
import Button from '../Button';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {shallow} from 'enzyme';


describe('Button component tests', () => {
    function setup(props) {
        return shallow(<Button {...props}/>);
    }

    it('Should render label and icon', done => {
        const wrapper = setup({icon: 'assessment', label: 'foo', iconSize: 15});
        const icon = wrapper.find(Icon);
        const label = wrapper.find(Text);
        expect(wrapper.find(TouchableOpacity).length).toBe(1);
        expect(icon.length).toBe(1);
        expect(icon.prop('size')).toBe(15);
        expect(label.length).toBe(1);
        expect(label.contains('foo')).toBe(true);
        done();
    });

    it('Should not render label or icon if not specified', done => {
        const wrapper = setup({});
        expect(wrapper.find(TouchableOpacity).length).toBe(1);
        expect(wrapper.find(Icon).length).toBe(0);
        expect(wrapper.find(Text).length).toBe(0);
        done();
    });

    it('Should render icon with size 20 if size is not specified', done => {
        const wrapper = setup({icon: 'assessment'});
        expect(wrapper.find(Icon).prop('size')).toBe(20);
        done();
    });

    it('Should call onClickHandler if button is clicked', done => {
        const onClickHandler = jest.fn();
        const wrapper = setup({onClick: onClickHandler});
        wrapper.find(TouchableOpacity).simulate('press');
        expect(onClickHandler).toHaveBeenCalled();
        done();
    });

    it('Should disable button if disabled property is set', done => {
        const wrapper = setup({disabled: true});
        expect(wrapper.find(TouchableOpacity).prop('disabled')).toBe(true);
        done();
    })
});
