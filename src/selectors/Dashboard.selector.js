/* eslint-disable import/prefer-default-export */

import { createSelector } from "reselect";

const selectDashboard = ({ dashboard }) => dashboard || {};

export const selectDashboardReport = createSelector(
  selectDashboard,
  dashboardState => dashboardState.report || [],
);
