import { ADD_CHILD_CARD, CHANGE_CARD, CHANGE_WIDTH, DELETE_CARD, DOWN_CARD, UP_CARD, } from "./types/cardTypes"

const initialState = [{ id: 0, title: 'первая карточка', width: 6, child: false }]

const cards = (state = initialState, { type, payload }) => {
   switch (type) {

      case CHANGE_CARD:
         return [...state.map((el) => el.id === payload.id ? { ...el, title: payload.title } : el)]

      case CHANGE_WIDTH:
         return [...state.map((el) => el.id === payload.id ? { ...el, width: payload.width } : el)]

      case ADD_CHILD_CARD:
         return [
            ...state.map((el) => el.id === payload.id ? { ...el, child: true } : el), // добавляю в предыдущий элемент
            {
               id: payload.id + 1, title: payload.title, width: 6, child: false
            }
         ]

      case DELETE_CARD:
         return state.filter((el) => el.id !== payload)

      case UP_CARD:
         const firstIndex = state.findIndex(el => el.id === payload)
         const secondIndex = firstIndex - 1
         return state.map(
            (element, index) =>
               index === firstIndex
                  ? { ...state[secondIndex], id: firstIndex, child: false }
                  : index === secondIndex
                     ? { ...state[firstIndex], id: secondIndex, child: true }
                     : element
         )

      case DOWN_CARD:
         const firstInd = state.findIndex(el => el.id === payload)
         const secondInd = firstInd + 1
         if (secondInd === state.length) { // если элемент последний, то ничего не произойдет
            return [...state]
         } else {
            return state.map( // здесь происходит замена двух элементов массива и меняется поле child
               (element, index) =>
                  index === firstInd
                     ? { ...state[secondInd], id: firstInd, child: true }
                     : index === secondInd
                        ? { ...state[firstInd], id: secondInd, child: false }
                        : element
            )
         }

      default:
         return state
   }
}

export default cards