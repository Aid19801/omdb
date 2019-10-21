import React from 'react';
import { mount } from 'enzyme';
import HomePage from './index';

describe('HomePage', () => {
    
    let wrapper;

    let mockProps = {}

    beforeAll(() => {
        wrapper = mount(<HomePage {...mockProps} />);
    });
    it('should render the Container without exploding', () => {
        expect(wrapper.find('.page__home').length).toEqual(1);
    });
})