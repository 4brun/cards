import { HIDE_MODAL, SHOW_MODAL } from "../store/types/modalTypes"

export const showModal = (action, title, id) => ({
   type: SHOW_MODAL,
   payload: { action, title, id }
})

export const hideModal = () => ({
   type: HIDE_MODAL,
})