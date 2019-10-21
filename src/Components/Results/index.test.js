import React from 'react';
import { mount } from 'enzyme';
import Results from './index';

describe('Results', () => {
  let wrapper;

  let mockProps = {
    results: []
  };

  let updatedProps = {
    results: [
      {
        Title: 'mock',
        Year: '1981',
        Poster: 'mock',
        Ratings: [
          {
            Title: '1/10'
          },
          {
            Title: '2/10'
          }
        ]
      },
      {
        Title: 'mock2',
        Year: '1982',
        Poster: 'mock2',
        Ratings: [
          {
            Title: '4/10'
          },
          {
            Title: '10/10'
          }
        ]
      }
    ]
  };

  beforeAll(() => {
    wrapper = mount(<Results {...mockProps} />);
  });
  it('should render Results without exploding', () => {
    expect(wrapper.find('#results__container').length).toEqual(1);
  });
  it('should render the correct number of child components (2)', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });
  it('should render (8 per Child Component) divs per result (2) that come in (18 in total))', () => {
    const component = mount(<Results {...updatedProps} />);
    expect(component.find('div').length).toEqual(18);
  });
  it('should render (8 per Child Component) divs per result (2) that come in (18 in total))', () => {
    const component = mount(<Results {...updatedProps} />);
    expect(component.find('div').length).toEqual(18);
  });
});
