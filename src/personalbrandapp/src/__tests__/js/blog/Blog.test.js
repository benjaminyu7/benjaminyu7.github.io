import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Blog from '../../../js/blog/Blog';
import BLOGPOST from '../../../blogposts/blogpost.json';

const BLOGPOSTS = {"posts":[
        {
            "filename":"../../../blogposts/aboutme.md"
        }
]};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Blog blogposts={BLOGPOST} />, div);
});
