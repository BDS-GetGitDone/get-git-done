import { render, screen } from "@testing-library/react";
import List from "./List";

it("render List", () => {
  render(<List />);
  const listItems = ["eat", "code", "sleep", "repeat"];
  const listElements = screen.getAllByRole("li");
  expect(listElements.length).toBe(listItems.length);
});
