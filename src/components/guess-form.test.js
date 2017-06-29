import React from 'react';
import {shallow, mount} from 'enzyme';
import * as actions from '../actions';
import {GuessForm} from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should fire the dispatch callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm dispatch={callback} />);
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalled();
    });

    it('Should reset the input when the form is submitted', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch}/>);
        const input = wrapper.find('input[type="text"]');
        input.node.value = 10;
        wrapper.simulate('submit');
        expect(input.node.value).toEqual('');
    });
});