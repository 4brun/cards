import { CREATE_CHILDREN_CARD, CHANGE_CHILDREN_CARD, CHANGE_CHILDREN_WIDTH, DELETE_CHILDREN_CARD } from "../store/types/childTypes";

export const createChildrenCard = (title, width) => ({
   type: CREATE_CHILDREN_CARD,
   payload: { title, width }
})

export const changeChildrenCard = (tittle) => ({
   type: CHANGE_CHILDREN_CARD,
   payload: tittle
})

export const changeChildrenWidth = (width) => ({
   type: CHANGE_CHILDREN_WIDTH,
   payload: width
})

export const deleteChildrenCard = (id) => ({
   type: DELETE_CHILDREN_CARD,
   payload: id
})