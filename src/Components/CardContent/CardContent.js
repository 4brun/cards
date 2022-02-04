import { Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ActionsMenu from '../ActionsMenu/ActionsMenu';
import ModalWindow from '../ModalWindow/ModalWindow';

const CardContent = ({ card }) => {
   const cards = useSelector(state => state.cards)
   const nextCard = cards[card.id + 1]

   return (
      <>
         <Row>
            <Col xs md lg={card.width}>
               <Card >
                  <Card.Header>
                     <ActionsMenu id={card.id} />
                  </Card.Header>
                  <Card.Body>
                     <Card.Title>карточка № {card.id + 1} - {card.title}</Card.Title>
                     <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        {card.child && nextCard ? <CardContent card={nextCard} /> : null}
                     </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">2 days ago</Card.Footer>
                  <ModalWindow />
               </Card>
            </Col>
         </Row>
      </>
   )
}

export default CardContent