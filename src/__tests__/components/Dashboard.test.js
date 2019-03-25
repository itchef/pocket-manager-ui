import React from "react";
import { createShallow } from "@material-ui/core/test-utils";
import { configure } from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";
import Dashboard from "../../containers/Dashboard.container";
import TableContainer from "../../components/table-container/TableContainer";
import PMButton from "../../components/pm-button/PMButton";

configure({ adapter: new Adapter() });

describe("Dashboard", () => {
  let shallow;
  let component;

  beforeEach(() => {
  	shallow = createShallow();
    component = shallow(<Dashboard />);
  });

  it("should render the component successfully", () => {
    expect(component.find(TableContainer)).toBeTruthy();
  });

  it("should render PMButton on it", () => {
    const addNewEntryButton = component.find(PMButton);
    expect(addNewEntryButton).toBeTruthy();
  });
});
