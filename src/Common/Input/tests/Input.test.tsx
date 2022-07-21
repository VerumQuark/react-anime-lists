import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "..";

describe("Input testing", () => {
  it("Input render", () => {
    render(<Input value="TESTING" onChange={() => {}} />);

    const input = screen.getByDisplayValue("TESTING");
    expect(input).toBeVisible();
    expect(input).toHaveValue("TESTING")
  });
});
