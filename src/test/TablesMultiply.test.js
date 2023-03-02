import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Components from "../components/TablesMultiply";

test("The component has a title", () => {
  render(<Components />);
  const h1 = screen.getByText(/Times Table Generator/);
  expect(h1).toBeInTheDocument();
});

test("renders two buttons", () => {
  render(<Components />);
  const button = screen.getByText(/generate tables/);
  expect(button).toBeInTheDocument();
  const button2 = screen.getByText(/reset table/);
  expect(button2).toBeInTheDocument();
});

test("the inputs for the start and end numbers must be empty", () => {
  render(<Components />);
  const startnumber = screen.getByPlaceholderText(/# start/i);
  const endNumber = screen.getByPlaceholderText(/# end/i);
  expect(startnumber.value).toBe("");
  expect(endNumber.value).toBe("");
});
test("the initial number entry should change", () => {
  render(<Components />);
  const passwordInputEl = screen.getByPlaceholderText(/# start/i);
  const tesvalue = "";
  fireEvent.change(passwordInputEl, {
    target: { value: tesvalue },
  });
  expect(passwordInputEl.value).toBe(tesvalue);
});

test("the end number entry should change", () => {
  render(<Components />);
  const passwordInputEl = screen.getByPlaceholderText(/# end/i);
  const tesvalue = "";
  fireEvent.change(passwordInputEl, {
    target: { value: tesvalue },
  });
  expect(passwordInputEl.value).toBe(tesvalue);
});
test("The label has a start number text", () => {
  const labelText = "Start Number:";
  render(<Components>{labelText}</Components>);
  expect(screen.getByText(labelText)).toBeInTheDocument();
});

test("The label has a end number text", () => {
  const labelText = "End Number:";
  render(<Components>{labelText}</Components>);
  expect(screen.getByText(labelText)).toBeInTheDocument();
});
