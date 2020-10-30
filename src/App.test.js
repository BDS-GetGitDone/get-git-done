import { render, screen } from "@testing-library/react";
import App from "./App";

test("display input", () => {
  render(<App />);
  const inputElement = screen.getByRole("input");
  expect(inputElement).toBeInTheDocument();
});
