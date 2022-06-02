import React from "react";
import ReactDom from "react-dom";

import { screen, render, cleanup } from "@testing-library/react";
import rendered from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";

import Button from "../Button";

beforeEach(cleanup);
afterEach(cleanup);

it("Render without crashing", () => {
	ReactDom.render(<Button />, document.createElement("div"));
});

it("Render button correctly", () => {
	const onClick = () => {
		console.log("Click");
	};
	render(<Button onClick={onClick} label={"Some Text"} />);
	const button = screen.getByTestId("counter-button");
	expect(button).toBeInTheDocument();
	expect(button).toHaveTextContent("Some Text");
	expect(button).toContainHTML("<span>Some Text</span>");
});

test("Matches snapshot", () => {
	const tree = rendered.create(<Button />).toJSON();
	expect(tree).toMatchSnapshot();
});
