import { fetchExpenseDetails } from "../../actions/tab.action";
import { FETCH_EXPENSES } from "../../actions/actionTypes";

describe("Tab Action", () => {
  it("should provide action of fetchExpenseDetails", () => {
    const fetchExpenseDetailsAction = fetchExpenseDetails(1);

    expect(fetchExpenseDetailsAction.type).toEqual(FETCH_EXPENSES);
    expect(fetchExpenseDetailsAction.payload).toEqual(1);
  });
});
