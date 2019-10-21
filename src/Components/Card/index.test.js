import React from 'react';
import { mount } from 'enzyme';
import Header from './index';

describe('ReusableCard', () => {
    
    let wrapper;

    let mockProps = {}

    beforeAll(() => {
        wrapper = mount(<Header {...mockProps} />);
    });
    it('should render the Reusable Card without exploding', () => {
        expect(wrapper.find('.reuseable-card').length).toEqual(1);
    });
})