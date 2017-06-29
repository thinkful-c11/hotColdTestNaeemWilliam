import React from 'react';
import {shallow} from 'enzyme';
import * as actions from '../actions';
import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });

});