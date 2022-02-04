import { useSelector } from "react-redux"
import CardContent from "../CardContent/CardContent"

const CardList = () => {
   const cards = useSelector((state) => state.cards)

   return (
      <>
         <CardContent card={cards[0]} />
      </>
   )
}

export default CardList
