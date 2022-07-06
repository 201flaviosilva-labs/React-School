import React from "react";
import { screen, render, cleanup } from "@testing-library/react";

import Button from "../Button";

beforeEach(cleanup);
afterEach(cleanup);

it("Render without crashing", () => {
	const { asFragment } = render(<Button />);
	expect(asFragment()).toMatchSnapshot();
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
