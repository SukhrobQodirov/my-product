import { useSelector } from "react-redux";
import Card from "../card/card";
import './cards-list.scss';

function CardsList() {
  const {feedbacksList} = useSelector(state => state.feedbacks);

  return(
    <ul className="cards-list">
      {feedbacksList?.map(feedback => {
        return(
          <Card data={feedback} key={feedback.id} />
        )
      })}
    </ul>
  )
}

export default CardsList;