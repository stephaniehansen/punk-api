import React, { Component } from "react";
import { shallow } from "enzyme";

import Card from '../Card';
import beers from "../../data/beers";

describe("Card component tests", () => {
  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<Card beer={beers[0]} />);
  });

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });
});