import { CLOSE_MODAL, OPEN_MODAL } from "./actionTypes";

export const openModal = modalName => ({
  type: OPEN_MODAL,
  payload: modalName,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
  payload: null,
});
