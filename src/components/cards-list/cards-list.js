import Card from "../card/card";
import './cards-list.scss';

function CardsList({data}) {
  return(
    <ul className="cards-list">
      {data.map(feedback => {
        return(
          <Card data={feedback} key={feedback.id} />
        )
      })}
    </ul>
  )
}

export default CardsList;