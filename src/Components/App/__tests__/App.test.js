import { render, screen } from "@testing-library/react";
import App from "../App";

describe("<App />", () => {
  test("Rendes App", () => {
    const { asFragment } = render(<App />);
    expect(screen.getByText("GitLab")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
