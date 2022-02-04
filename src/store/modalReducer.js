import { HIDE_MODAL, SHOW_MODAL } from "./types/modalTypes";

const initialState = { show: false, action: null, title: null }

const modal = (state = initialState, { type, payload }) => {
   switch (type) {
      case SHOW_MODAL:
         return {
            show: true,
            action: payload.action,
            title: payload.title,
            id: payload.id
         }
      case HIDE_MODAL:
         return {
            show: false,
            action: null
         }

      default: return state
   }
}

export default modal