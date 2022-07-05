import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import ChangeColorButton, { camelCaseToSpaces } from "../ChangeColorButton";

describe("Noob - <ChangeColorButton />", () => {
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

	test("button turns blue color and 'Blue' text after click", () => {
		render(<ChangeColorButton />);
		const button = screen.getByRole("button", { name: "Red" });
		fireEvent.click(button);

		expect(button).toHaveStyle({ backgroundColor: "#0000ff" });
		expect(button).toHaveTextContent("Blue");
	});

	test("button returns to red after second click", () => {
		render(<ChangeColorButton />);
		const button = screen.getByRole("button", { name: "Red" });
		fireEvent.doubleClick(button);

		expect(button).toHaveStyle({ backgroundColor: "#ff0000" });
		// expect(button).toHaveTextContent("Red");
		expect(button.textContent).toBe("Red");
	});

	test("checkbox has the correct initial (red) color and initial ('Red') text", () => {
		render(<ChangeColorButton />);
		const checkbox = screen.getByRole("checkbox");
		expect(checkbox).not.toBeChecked();
	});

	test("checkbox turns blue color and 'Blue' text after click", () => {
		render(<ChangeColorButton />);
		const button = screen.getByRole("button", { name: "Red" });
		const checkbox = screen.getByRole("checkbox");

		fireEvent.click(checkbox);

		expect(checkbox).toBeChecked();
		expect(button).toHaveStyle({ backgroundColor: "#0000ff" });
		expect(button).toHaveTextContent("Blue");
	});

	test("checkbox returns to red after second click", () => {
		render(<ChangeColorButton />);
		const button = screen.getByRole("button", { name: "Red" });
		const checkbox = screen.getByRole("checkbox", { name: "Red" });

		fireEvent.click(checkbox);
		fireEvent.click(checkbox);

		expect(checkbox).not.toBeChecked();
		expect(button).toHaveStyle({ backgroundColor: "#ff0000" });
		expect(button).toHaveTextContent("Red");
	});

	test("Matches snapshot", () => {
		const { asFragment } = render(<ChangeColorButton />);
		expect(asFragment()).toMatchSnapshot();
	});

	describe("camelCaseToSpaces", () => {
		it("should work if no inner capital letters", () => {
			expect(camelCaseToSpaces("String")).toBe("String");
			expect(camelCaseToSpaces("string")).toBe("string");
		});

		it("should work for one capital letter", () => {
			expect(camelCaseToSpaces("mystring")).toBe("mystring");
			expect(camelCaseToSpaces("myString")).toBe("my String");
			expect(camelCaseToSpaces("MyString")).toBe("My String");
		});

		it("should work for multiple capital letters", () => {
			expect(camelCaseToSpaces("myreallybigstring")).toBe("myreallybigstring");
			expect(camelCaseToSpaces("myReallyBigString")).toBe("my Really Big String");
			expect(camelCaseToSpaces("MyReallyBigString")).toBe("My Really Big String");
		});
	});
});
