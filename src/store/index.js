import { combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import cards from "./cardsReducer"
import modal from "./modalReducer"
import child from "./childReducer"

const rootReduser = combineReducers({
   cards,
   modal,
   child
})

const store = createStore(rootReduser, composeWithDevTools())

export default store