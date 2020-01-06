import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { shallow } from "enzyme";

describe("renders without crashing", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});
