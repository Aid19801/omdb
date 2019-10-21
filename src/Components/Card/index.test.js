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
        expect(wrapper.find('.MuiGrid-grid-xs-4').length).toEqual(1);
    });
})