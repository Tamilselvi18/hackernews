import React from 'react';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import App from './App';
const app = shallow(<App />);

describe('App', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('createa a Home component', () => {
    expect(app.find('Home').exists()).toBe(true);
  });

  it('createa a Chart component', () => {
    expect(app.find('Chart').exists()).toBe(true);
  });
});
