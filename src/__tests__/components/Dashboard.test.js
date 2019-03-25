import React from "react";
import { createShallow } from "@material-ui/core/test-utils";
import { configure } from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";
import Dashboard from "../../containers/Dashboard.container";
import TableContainer from "../../components/table-container/TableContainer";

configure({ adapter: new Adapter() });

describe("Dashboard", () => {
  let shallow;

  beforeEach(() => {
  	shallow = createShallow();
  });

  it("should render the component successfully", () => {
    const component = shallow(<Dashboard />);

    expect(component.find(TableContainer)).toBeTruthy();
  });
});
