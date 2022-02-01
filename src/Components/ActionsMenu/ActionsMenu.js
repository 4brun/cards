import { Dropdown } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { deleteCard, rebaseCards } from "../../actions/cardsActions"
import { createChildrenCard, deleteChildrenCard } from "../../actions/childActions"
import { hideModal, showModal } from "../../actions/modalActions"


const ActionsMenu = ({ isChild }) => {
   const dispatch = useDispatch()
   const rootCard = useSelector((state) => state.cards)
   const childCard = useSelector((state) => state.child)

   const cardActions = [{
      id: 0,
      title: "Изменить название",
      action: 'changeCard'
   },
   {
      id: 1,
      title: "Изменить ширирну",
      action: 'changeWidth'
   },
   {
      id: 2,
      title: "Добавить дочернюю карточку",
      action: 'addChildCard'
   }] // т.к. тут везде требуется поле ввода, можно переиспользовать модальное окно

   const handlerClick = (action, title) => dispatch(showModal(action, title))

   const deleteItem = (isChild) => {
      console.log(isChild);
      if (!isChild) {
         dispatch(deleteCard()) // удаляем родителя
      } else {
         dispatch(deleteChildrenCard()) // удаляем дочку
      }
   }

   const rebase = () => {
      let tmp = childCard // временно кладу данные в переменную
      if (!tmp.length) {
         dispatch(hideModal())
      } else {
         dispatch(createChildrenCard(rootCard[0].title, rootCard[0].width)) // записываю в дочернюю карточку данные из главной
         dispatch(rebaseCards(tmp[0].title, tmp[0].width)) // в главную карточку записываю данные из дочерней
      }
   }

   return (
      <Dropdown>
         <Dropdown.Toggle variant="success" id="dropdown-basic">
            Действия
         </Dropdown.Toggle>

         <Dropdown.Menu>
            {cardActions.map((el) =>
               <Dropdown.Item
                  onClick={() => handlerClick(el.action, el.title, isChild)}
                  key={el.id}>
                  {el.title}
               </Dropdown.Item>)}

            <Dropdown.Item onClick={() => deleteItem(isChild)}>Удалить карточу</Dropdown.Item>
            {!isChild && <Dropdown.Item onClick={() => rebase()}>Опустить карточку</Dropdown.Item>}
            {/* видно только если можно опустить */}
            {isChild && <Dropdown.Item onClick={() => rebase()}>Поднять карточку</Dropdown.Item>}
         </Dropdown.Menu>
      </Dropdown>
   )
}

export default ActionsMenu