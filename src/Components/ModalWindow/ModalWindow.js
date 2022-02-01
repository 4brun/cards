import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { changeCard, changeWidth } from '../../actions/cardsActions'
import { createChildrenCard } from '../../actions/childActions'
import { hideModal } from '../../actions/modalActions'

const ModalWindow = () => {

   const modal = useSelector((state) => state.modal)

   const dispatch = useDispatch()
   const handleClose = () => dispatch(hideModal())
   const [inputValue, setInputValue] = useState()

   const getAction = (action) => {
      switch (action) {
         case 'changeCard':
            return dispatch(changeCard(inputValue)), // меняем название
               setInputValue(''), // чистим инпут
               handleClose() // закрываем окно

         case 'changeWidth':
            return dispatch(changeWidth(+inputValue)),
               setInputValue(''),
               handleClose()

         case 'addChildCard':
            return dispatch(createChildrenCard(inputValue)),
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
               onClick={() => getAction(modal.action)}>Save changes</Button>
         </Modal.Footer>

      </Modal>
   )
}

export default ModalWindow