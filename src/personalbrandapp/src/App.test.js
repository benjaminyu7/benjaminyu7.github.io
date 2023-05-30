import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";

test("renders appBar", () => {
  const { getByText } = render(<App />);
  const appBarElement = getByText(/Blog/i);
  expect(appBarElement).toBeInTheDocument();
});

it("renders app without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
