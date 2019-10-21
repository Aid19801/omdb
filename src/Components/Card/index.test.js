import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './index';

describe('Card', () => {
    
    let wrapper;

    let mockProps = {
        heading: 'mock1',
        subheading: 'mock2',
        callout: 'mock3',
        img: 'mock4',
    }

    beforeAll(() => {
        wrapper = shallow(<Card {...mockProps} />);
    });
    it('should render the Card without exploding', () => {
        expect(wrapper.find('#card__fade-in').length).toEqual(1);
    });
    it('should render the Card with expected props', () => {
        const component = mount(<Card {...mockProps} />);
        expect(component.props()).toEqual(mockProps);
    });
})