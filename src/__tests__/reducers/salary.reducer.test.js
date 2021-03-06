import salaryReducer from "../../reducers/salary.reducer";

describe("Salary Reducer", () => {
  it("should provide unchanged state for default action", () => {
    const state = { amount: 2000 };
    const actualState = salaryReducer(state, "SOME_ACTION");

    expect(actualState.amount).toEqual(2000);
  });
});
