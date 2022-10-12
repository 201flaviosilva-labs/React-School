import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("<App />", () => {
  test("Rendes App", () => {
    const { asFragment } = render(<App />);
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
