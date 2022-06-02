import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import ChangeColorButton from "../ChangeColorButton";

describe("<ChangeColorButton />", () => {
	beforeEach(cleanup);
	afterEach(cleanup);

	it("should render without crashing", () => {
		render(<ChangeColorButton />);
	});

	test("button has the correct initial (red) color and initial ('Red') text", () => {
		render(<ChangeColorButton />);
		const button = screen.getByRole("button", { name: "Red" });
		expect(button).toHaveStyle({ backgroundColor: "#ff0000" });
	});

	test("button turns green color and 'Green' text after click", () => {
		render(<ChangeColorButton />);
		const button = screen.getByRole("button", { name: "Red" });
		fireEvent.click(button);

		expect(button).toHaveStyle({ backgroundColor: "#00ff00" });
		expect(button).toHaveTextContent("Green");
	});

	test("button returns to red after second click", () => {
		render(<ChangeColorButton />);
		const button = screen.getByRole("button", { name: "Red" });
		fireEvent.doubleClick(button);

		expect(button).toHaveStyle({ backgroundColor: "#ff0000" });
		// expect(button).toHaveTextContent("Red");
		expect(button.textContent).toBe("Red");
	});

	test("Matches snapshot", () => {
		const { asFragment } = render(<ChangeColorButton />);
		expect(asFragment()).toMatchSnapshot();
	})
});
