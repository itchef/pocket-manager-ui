import { createShallow } from "@material-ui/core/test-utils";
import React from "react";
import { Fab } from "@material-ui/core";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16/build";
import PMButton from "../../components/pm-button/PMButton";

configure({ adapter: new Adapter() });

describe("PMButton", () => {
  let component;
  let shallow;
  beforeEach(() => {
    shallow = createShallow();
    component = shallow(<PMButton />);
  });

  it("should render successfully", () => {
    expect(component.find(Fab)).toBeTruthy();
  });

  it("should render with default props", () => {
    expect(PMButton.defaultProps.color).toEqual("secondary");
    expect(PMButton.defaultProps.message.length).toEqual(0);
    expect(PMButton.defaultProps.customStyle.length).toEqual(0);
  });

  it("should render with valid props", () => {
    const componentWithProps = shallow(<PMButton color="primary" message="Add New" customStyle="some-style" />);

    expect(componentWithProps.find(Fab).props().color).toEqual("primary");
    expect(componentWithProps.find(Fab).props().className).toEqual("some-style");
  });
});
