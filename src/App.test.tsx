import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders the App component", () => {
  render(<App />);
  const linkElement = screen.getByText(/Flights/i);
  expect(linkElement).toBeInTheDocument();
});
