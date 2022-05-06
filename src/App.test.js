import { render, screen } from "@testing-library/react";
import App from "./App";

test("Rendes App", () => {
  render(<App />);
  expect(screen.getByText("GitLab")).toBeInTheDocument();
});
