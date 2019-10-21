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
    it('should render the expected child components 1/3', () => {
        expect(wrapper.find('Header').length).toEqual(1);
    });
    it('should render the expected child components 2/3', () => {
        expect(wrapper.find('SearchInput').length).toEqual(1);
    })
    it('should render the expected child components 3/3', () => {
        expect(wrapper.find('Results').length).toEqual(1);
    });
    
})