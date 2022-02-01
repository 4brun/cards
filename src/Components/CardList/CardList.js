import { useSelector } from "react-redux"
import RootCard from "../Card/RootCard"


const CardList = () => {
   const cards = useSelector((state) => state.cards)

   return (
      <>
         {cards.length && cards.map((el) => <RootCard card={el} key={el.id} />)}
      </>
   )
}

export default CardList
