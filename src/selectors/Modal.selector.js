/* eslint-disable import/prefer-default-export */

import { createSelector } from "reselect";

const selectModal = ({ modal }) => modal || {};
export const selectActiveModal = createSelector(
  selectModal,
  modalState => modalState.activeModal,
);
