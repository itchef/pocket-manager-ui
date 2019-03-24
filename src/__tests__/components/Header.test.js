import React from "react";
import { createMount, createShallow } from "@material-ui/core/test-utils";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { AppBar } from "@material-ui/core";
import Header from "../../components/header/Header";

configure({ adapter: new Adapter() });

describe("HeaderComponent", () => {
  let mount;
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it("should render successfully", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find(AppBar).props().position).toEqual("fixed");
  });

  it("should have menu icon", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find(".icon-button").find("MenuIcon")).toBeTruthy();
  });

  it("should render menu icon with secondary color", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find(".icon-button").props().color).toEqual("secondary");
  });
});
