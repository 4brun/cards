import { CHANGE_CHILDREN_CARD, CHANGE_CHILDREN_WIDTH, CREATE_CHILDREN_CARD, DELETE_CHILDREN_CARD } from "./types/childTypes"

const initialState = []

const child = (state = initialState, { type, payload }) => {
   switch (type) {
      case CREATE_CHILDREN_CARD:
         return [{
            id: 0,
            title: payload.title,
            width: payload.width || 6
         }]

      case CHANGE_CHILDREN_CARD:
         return state.filter((el) => el.title = payload)

      case CHANGE_CHILDREN_WIDTH:
         return state.filter((el) => el.width = payload)

      case DELETE_CHILDREN_CARD:
         return []
      default:
         return state
   }
}

export default child