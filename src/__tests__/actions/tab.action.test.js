import { fetchExpenseDetails } from "../../actions/tab.action";
import { SELECT_TAB } from "../../actions/actionTypes";

describe("Tab Action", () => {
  it("should provide action of fetchExpenseDetails", () => {
    const fetchExpenseDetailsAction = fetchExpenseDetails(1);

    expect(fetchExpenseDetailsAction.type).toEqual(SELECT_TAB);
    expect(fetchExpenseDetailsAction.payload).toEqual(1);
  });
});
