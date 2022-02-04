import { Dropdown } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { deleteCard, downCard, upCard } from "../../actions/cardsActions"
import { showModal } from "../../actions/modalActions"

const ActionsMenu = ({ id }) => {
   const dispatch = useDispatch()

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
      action: 'addCard'
   }] // т.к. тут везде требуется поле ввода, можно переиспользовать модальное окно

   const handlerClick = (action, title) => dispatch(showModal(action, title, id))

   const deleteItem = (id) => dispatch(deleteCard(id))

   return (
      <Dropdown>
         <Dropdown.Toggle variant="success" id="dropdown-basic">
            Действия
         </Dropdown.Toggle>

         <Dropdown.Menu>
            {cardActions.map((el) =>
               <Dropdown.Item
                  onClick={() => handlerClick(el.action, el.title)}
                  key={el.id}>
                  {el.title}
               </Dropdown.Item>)}

            <Dropdown.Item onClick={() => deleteItem(id)}>Удалить карточу</Dropdown.Item>
            <Dropdown.Item onClick={() => dispatch(downCard(id))}>Опустить карточку</Dropdown.Item>
            {id !== 1 && <Dropdown.Item onClick={() => dispatch(upCard(id))}>Поднять карточку</Dropdown.Item>}
         </Dropdown.Menu>
      </Dropdown>
   )
}

export default ActionsMenu