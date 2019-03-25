/* eslint-disable import/prefer-default-export */

import {FETCH_EXPENSES, SELECT_TAB} from "./actionTypes";

export const fetchExpenseDetails = nextTab => ({
  type: SELECT_TAB,
  payload: nextTab,
});

export const fetchReports = tab => ({
  type: FETCH_EXPENSES,
  payload: tab,
});