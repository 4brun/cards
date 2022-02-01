import { CHANGE_CARD, CHANGE_WIDTH, DELETE_CARD, REBASE_CARDS } from "../store/types/cardTypes";

export const changeCard = (tittle) => ({
   type: CHANGE_CARD,
   payload: tittle
})

export const changeWidth = (width) => ({
   type: CHANGE_WIDTH,
   payload: width
})

export const deleteCard = (id) => ({
   type: DELETE_CARD,
   payload: id
})

export const rebaseCards = (title, width) => ({
   type: REBASE_CARDS,
   payload: { title, width }
})