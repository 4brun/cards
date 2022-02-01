import { Card, Col } from "react-bootstrap"
import { useSelector } from "react-redux"
import ActionsMenu from "../ActionsMenu/ActionsMenu"
import ModalWindow from "../ModalWindow/ModalWindow"

const ChildrenCard = () => {
   const child = useSelector((state) => state.child)

   return (<Col xs md lg={child[0].width}>
      <Card>
         <Card.Header>
            <ActionsMenu isChild={true} />
         </Card.Header>
         <Card.Body>
            <Card.Title>Вторая карточка - {child[0].title}</Card.Title>
            <Card.Text>
               Я дочерняя карточка.
               With supporting text below as a natural lead-in to additional content.
            </Card.Text>
         </Card.Body>
         <Card.Footer className="text-muted">2 days ago</Card.Footer>
         <ModalWindow />
      </Card>
   </Col>)
}

export default ChildrenCard