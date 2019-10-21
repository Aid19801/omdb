import React from 'react';
import { mount } from 'enzyme';
import Header from './index';

describe('Header', () => {
    
    let wrapper;

    let mockProps = {}

    beforeAll(() => {
        wrapper = mount(<Header {...mockProps} />);
    });
    it('should render the Header without exploding', () => {
        expect(wrapper.find('.header__container').length).toEqual(1);
    });
})