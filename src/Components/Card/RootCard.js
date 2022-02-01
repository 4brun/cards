import { Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ActionsMenu from '../ActionsMenu/ActionsMenu';
import ChildrenCard from '../ChildrenCard/ChildrenCard';
import ModalWindow from '../ModalWindow/ModalWindow';

const RootCard = ({ card }) => {
   const state = useSelector((state) => state.child)

   return (
      <Row>
         <Col xs md lg={card.width}>
            <Card >
               <Card.Header>
                  <ActionsMenu isChild={false} />
               </Card.Header>
               <Card.Body>
                  <Card.Title>Первая карточка - {card.title}</Card.Title>
                  <Card.Text>
                     Я главная карточка.
                     With supporting text below as a natural lead-in to additional content.
                     {state.length > 0 && <ChildrenCard />}
                  </Card.Text>
               </Card.Body>
               <Card.Footer className="text-muted">2 days ago</Card.Footer>
               <ModalWindow />
            </Card>
         </Col>
      </Row>
   )
}

export default RootCard