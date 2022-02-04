import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { addCard, changeCard, changeWidth } from '../../actions/cardsActions'
import { hideModal } from '../../actions/modalActions'

const ModalWindow = () => {
   const modal = useSelector((state) => state.modal)
   const dispatch = useDispatch()
   const [inputValue, setInputValue] = useState('')

   const handleClose = () => dispatch(hideModal())

   const getAction = (id, action) => {

      switch (action) {
         case 'changeCard':
            return dispatch(changeCard(id, inputValue)), // меняем название
               setInputValue(''), // чистим инпут
               handleClose() // закрываем окно

         case 'changeWidth':
            if (isNaN(inputValue)) {
               return setInputValue('') // если не число, ничего не произойдет
            } else {
               return dispatch(changeWidth(id, +inputValue)),
                  setInputValue(''),
                  handleClose()
            }

         case 'addCard':
            return dispatch(addCard(id, inputValue)),
               setInputValue(''),
               handleClose()
         default:
            break
      }
   }

   return (
      <Modal show={modal.show} onHide={handleClose}>

         <Modal.Header closeButton>
            <Modal.Title>{modal.title}</Modal.Title>
         </Modal.Header>

         <Modal.Body>
            <Form.Group>
               <Form.Control
                  type="text"
                  placeholder={modal.title}
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)} />
            </Form.Group>
         </Modal.Body>

         <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button
               variant="primary"
               type="submit"
               onClick={() => getAction(modal.id, modal.action)}>Save changes</Button>
         </Modal.Footer>

      </Modal>
   )
}

export default ModalWindow