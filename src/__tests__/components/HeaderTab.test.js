import React from "react";
import { configure } from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";
import { createShallow } from "@material-ui/core/test-utils";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { Tabs } from "@material-ui/core";
import HeaderTab from "../../components/tab/HeaderTab";

const mockStore = configureMockStore();
const store = mockStore({});

configure({ adapter: new Adapter() });

describe("TabComponent", () => {
  let component;
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
    component = shallow(
      <Provider store={store}>
        <HeaderTab />
      </Provider>,
    );
  });

  it("should render HeaderTab component successfully", () => {
    expect(component).toBeTruthy();
  });

  it("should invoke onTabTap on clicking the tab", () => {
    const mockOnTabTap = jest.fn();
    const headerComponent = shallow(<HeaderTab onTapTab={mockOnTabTap} />);
    headerComponent.find(Tabs).simulate("change");

    expect(mockOnTabTap).toHaveBeenCalled();
  });
});
