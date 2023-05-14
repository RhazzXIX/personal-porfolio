import React from "react";
import { render } from "@testing-library/react";
import Projects from "../Projects";

describe("Projects component", () => {
  it("Renders on screen", () => {
    const { container } = render(<Projects />);

    expect(container).toMatchSnapshot();
  });
});
