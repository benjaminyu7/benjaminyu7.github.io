import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import BlogPost from "../../../js/blog/BlogPost";

const BLOG_TEXT = "blog";
const BLOG_DATE = "date";

test("renders blogpost text", () => {
  const { getByText } = render(<BlogPost text={BLOG_TEXT} />);
  const blogpostText = getByText(/blog/i);
  expect(blogpostText).toBeInTheDocument();
});

test("renders blogpost date", () => {
  const { getByText } = render(<BlogPost text={BLOG_TEXT} date={BLOG_DATE} />);
  const blogpostDate = getByText(/date/i);
  expect(blogpostDate).toBeInTheDocument();
  const blogpostText = getByText(/blog/i);
  expect(blogpostText).toBeInTheDocument();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BlogPost text={""} />, div);
});
