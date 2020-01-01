import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import ButtonAppBar from '../../js/ButtonAppBar';

test('renders learn react link', () => {
  const { getByText } = render(<ButtonAppBar />);
  const linkElement = getByText(/Blog/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonAppBar />, div);
});
