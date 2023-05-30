import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import ButtonAppBar from "../../js/ButtonAppBar";

test("renders appBar text", () => {
  const { getByText } = render(<ButtonAppBar />);
  const blogTextNameElement = getByText(/Benjamin Yu/i);
  expect(blogTextNameElement).toBeInTheDocument();
  const blogTextElement = getByText(/Blog/i);
  expect(blogTextElement).toBeInTheDocument();
});

it("renders buttonAppBar without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ButtonAppBar />, div);
});
