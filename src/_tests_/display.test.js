import React from "react";
import { shallow } from "enzyme";
import Display from "../components/Display";


//test #1

describe("h3 displaying Gender:", () => {
  it("display Gender:", () => {
    const land = shallow(<Display/>)
    const h3 = land.find('h3').at(0).text()
    expect(h3).toEqual("Gender:")
    
  });
});
