import { selectDashboardReport } from "../../selectors/Dashboard.selector";

describe("Dashboard Selector", () => {
  it("should select dashboard report successfully", () => {
    const state = {
      dashboard: {
        report: [
          { name: "Travel", amount: 100 },
        ],
      },
    };

    expect(selectDashboardReport(state)).toEqual([{ name: "Travel", amount: 100 }]);
  });

  it("should provide empty array as default", () => {
    const state = { dashboard: {} };

    expect(selectDashboardReport(state)).toEqual([]);
  });
});
