import React from 'react';
import { mount } from 'enzyme';
import SearchInput from './index';

describe('SearchInput', () => {
    
    let wrapper;

    let mockProps = {}

    beforeAll(() => {
        wrapper = mount(<SearchInput {...mockProps} />);
    });

    it('should render the search Input without exploding', () => {
        expect(wrapper.find('.MuiInput-input').length).toEqual(1);
    });
})