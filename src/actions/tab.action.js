/* eslint-disable import/prefer-default-export */

import { FETCH_EXPENSES } from "./actionTypes";

export const fetchExpenseDetails = nextTab => ({
  type: FETCH_EXPENSES,
  payload: nextTab,
});
