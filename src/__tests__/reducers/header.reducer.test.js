import headerDetails from "../../reducers/header.reducer";
import { FETCH_EXPENSES } from "../../actions/actionTypes";

describe("Header Details Reducer", () => {
  it("should provide empty state for no action", () => {
    expect(headerDetails()).toEqual({});
  });

  it("should provide default state for no action matched", () => {
    expect(headerDetails({ current: 1 })).toEqual({ current: 1 });
  });

  it("should provide updated current value on empty state", () => {
    const action = { type: FETCH_EXPENSES, payload: 1 };

    expect(headerDetails({}, action)).toEqual({ tab: { current: 1 } });
  });

  it("should provide updated state when initial state exists", () => {
    const action = { type: FETCH_EXPENSES, payload: 1 };
    const state = { message: "hello", tab: { current: 0 } };

    expect(headerDetails(state, action)).toEqual({ message: "hello", tab: { current: 1 } });
  });
});
