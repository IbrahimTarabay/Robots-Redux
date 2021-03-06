import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
 
import React from "react";
import CardList from "./CardList";
 
it("Expect to return Card component", () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com'
    }
  ]
  const wrapper = shallow(<CardList robots={mockRobots}/>);
  expect(
    toJson(wrapper)
  ).toMatchSnapshot();
});