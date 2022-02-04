import { combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import cards from "./cardsReducer"
import modal from "./modalReducer"

const rootReduser = combineReducers({
   cards,
   modal,
})

const store = createStore(rootReduser, composeWithDevTools())

export default store