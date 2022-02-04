import { CHANGE_CARD, CHANGE_WIDTH, DELETE_CARD, ADD_CHILD_CARD, UP_CARD, DOWN_CARD } from "../store/types/cardTypes";

export const changeCard = (id, title) => ({
   type: CHANGE_CARD,
   payload: { id, title }
})

export const changeWidth = (id, width) => ({
   type: CHANGE_WIDTH,
   payload: { id, width }
})

export const addCard = (id, title) => ({
   type: ADD_CHILD_CARD,
   payload: { id, title }
})

export const deleteCard = (id) => ({
   type: DELETE_CARD,
   payload: id
})

export const upCard = (id) => ({
   type: UP_CARD,
   payload: id
})

export const downCard = (id) => ({
   type: DOWN_CARD,
   payload: id
})