import React from 'react';
import {shallow} from 'enzyme';

import {TopNav} from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Should call dispatch when new game is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav dispatch={callback} />);
        const link = wrapper.find('.new');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });

    it('Should call onInfo when info is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav dispatch={callback} />);
        const link = wrapper.find('.what');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });
});