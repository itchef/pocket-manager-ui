import { selectCurrentTab } from "../../selectors/HeaderTab.selector";

describe("Header Tab Selector", () => {
  it("should provide default state as 0 when no headerDetails provided", () => {
  	expect(selectCurrentTab({ headerDetails: {} })).toEqual(0);
  });

  it("should provide current tab value", () => {
    const store = {
	    headerDetails: { tab: { current: 1 } },
    };

    expect(selectCurrentTab(store)).toEqual(1);
  });
});
