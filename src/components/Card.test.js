import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
 
import React from "react";
import Card from "./Card";
 
it("Expect to return Card component", () => {
  const wrapper = shallow(<Card />);
  expect(
    toJson(wrapper)
  ).toMatchSnapshot();
});
