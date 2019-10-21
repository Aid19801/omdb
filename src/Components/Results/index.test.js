import React from 'react';
import { mount } from 'enzyme';
import Header from './index';

describe('Results', () => {
    
    let wrapper;

    let mockProps = {}

    beforeAll(() => {
        wrapper = mount(<Header {...mockProps} />);
    });
    it('should render the Results without exploding', () => {
        expect(wrapper.find('.MuiGrid-grid-xs-4').length).toEqual(1);
    });
})