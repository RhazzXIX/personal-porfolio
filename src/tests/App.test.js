import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../components/App";
import React from "react";

describe('App component', () => {
  it('Renders on screen', () => {
    const {container} = render(<App />)
    expect(container).toMatchSnapshot()
  })
})