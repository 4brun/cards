import { HIDE_MODAL, SHOW_MODAL } from "../store/types/modalTypes"

export const showModal = (action, title) => ({
   type: SHOW_MODAL,
   payload: { action, title }
})

export const hideModal = () => ({
   type: HIDE_MODAL,
})