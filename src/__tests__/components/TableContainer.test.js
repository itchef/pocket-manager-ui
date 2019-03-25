import { configure } from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";
import { createShallow } from "@material-ui/core/test-utils";
import React from "react";
import { TableCell } from "@material-ui/core";
import TableContainer from "../../components/table-container/TableContainer";

configure({ adapter: new Adapter() });

describe("TableContainer", () => {
  let shallow;
  let component;

  beforeEach(() => {
  	shallow = createShallow();
	  component = shallow(<TableContainer />);
  });

  it("should render the component successfully", () => {
    expect(component.find(TableCell).get(0)).toBeTruthy();
  });

  xit("should render component with default values", () => {
    expect(component.defaultProps.reports).toEqual([]);
  });
});
