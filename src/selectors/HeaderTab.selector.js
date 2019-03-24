/* eslint-disable import/prefer-default-export */

import { createSelector } from "reselect";

const selectTab = ({ headerDetails }) => headerDetails.tab || {};

export const selectCurrentTab = createSelector(
  selectTab,
  tabState => tabState.current || 0,
);
