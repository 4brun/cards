import { CHANGE_CARD, CHANGE_WIDTH, DELETE_CARD, REBASE_CARDS } from "./types/cardTypes"

const initialState = [{ id: 0, title: 'первая карточка', width: 6 }]

const cards = (state = initialState, { type, payload }) => {
   switch (type) {

      case CHANGE_CARD:
         return state.filter((el) => el.title = payload)

      case CHANGE_WIDTH:
         return state.filter((el) => el.width = payload)

      case DELETE_CARD:
         return []

      case REBASE_CARDS:
         return [{ id: 0, title: payload.title, width: payload.width || 6 }]
      default:
         return state
   }
}

export default cards