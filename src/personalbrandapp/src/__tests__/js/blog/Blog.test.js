import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import waitUntil from "async-wait-until";
import Blog, { Blog as UnstyledBlog } from "../../../js/blog/Blog";
import { getByText } from "@testing-library/react";
import BlogPost from "../../../js/blog/BlogPost";
import { shallow } from "enzyme";

const BLOGPOST_TEXT = "##About Me";
const BLOGPOST_TEXT_SECOND = "blogpost test second";
const BLOGPOST_DATE = "1/1/2020";

const BLOGPOSTS = {
  posts: [
    {
      filename: "../../../blogposts/aboutme.md",
    },
    {
      filename: "../../../blogposts/aboutme.md",
    },
  ],
};

const BLOGPOSTS_DATES = {
  posts: [
    {
      filename: "../../../blogposts/aboutme.md",
      date: BLOGPOST_DATE,
    },
  ],
};

beforeEach(() => {
  fetch.resetMocks();
});

test("multiple posts are rendered in the right order", async () => {
  fetch.mockResponses([BLOGPOST_TEXT], [BLOGPOST_TEXT_SECOND]);
  const wrapper = shallow(<Blog blogposts={BLOGPOSTS} />);
  const root = wrapper.find(UnstyledBlog).dive();
  await waitUntil(() => root.state("blogpost").length === 2);

  expect(root.state("blogpost")[0]).toEqual(
    <BlogPost text={BLOGPOST_TEXT} key={0} />
  );
  expect(root.state("blogpost")[1]).toEqual(
    <BlogPost text={BLOGPOST_TEXT_SECOND} key={1} />
  );
});

test("renders blogpost date", async () => {
  fetch.mockResponseOnce(BLOGPOST_TEXT);
  const wrapper = shallow(<Blog blogposts={BLOGPOSTS_DATES} />);
  const root = wrapper.find(UnstyledBlog).dive();
  await waitUntil(() => root.state("blogpost").length !== 0);

  expect(root.state("blogpost")[0]).toEqual(
    <BlogPost text={BLOGPOST_TEXT} date={BLOGPOST_DATE} key={0} />
  );
});

test("renders blogpost text", async () => {
  fetch.mockResponseOnce(BLOGPOST_TEXT);
  const wrapper = shallow(<Blog blogposts={BLOGPOSTS} />);
  const root = wrapper.find(UnstyledBlog).dive();
  await waitUntil(() => root.state("blogpost").length !== 0);

  expect(root.state("blogpost")[0]).toEqual(
    <BlogPost text={BLOGPOST_TEXT} key={0} />
  );
});

it("renders Blog without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Blog blogposts={BLOGPOSTS} />, div);
});
