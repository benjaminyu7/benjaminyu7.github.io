import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import BlogPost from '../../../js/blog/BlogPost';

const BLOG_TEXT = "blog";
const BLOG_DATE = "date";

test('renders blogpost text', () => {
  const { getByText } = render(<BlogPost text={BLOG_TEXT}/>);
  const linkElement = getByText(/blog/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders blogpost date', () => {
  const { getByText } = render(<BlogPost text={BLOG_TEXT} date={BLOG_DATE}/>);
  const linkElement = getByText(/date/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlogPost text={""} />, div);
});
