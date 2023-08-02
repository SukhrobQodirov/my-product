import CategoryRadio from "../category-radio/category-radio";
import DropUp from "../../assets/img/drop-up-blue.svg";
import Comments from "../../assets/img/comments-icon.svg";
import "./card.scss";

function Card({ className = "", ...props }) {
  return (
    <li className={`card ${className}`}>
      <button className="card__btn">
        <img
          src={DropUp}
          alt="drop up"
          className="card__btn-img"
          width={"10"}
          height={"6"}
        />
        112
      </button>

      <div className="card__content">
        <h2 className="card__title">Add tags for solutions</h2>
        <p className="card__desc">
          Easier to search for solutions based on a specific stack.
        </p>
        <CategoryRadio>Enhancement</CategoryRadio>
      </div>
      <div className="card__comments">
        <img
          className="card__comments-icon"
          src={Comments}
          alt="comments icon"
          width={"18"}
          height={"16"}
        />
        <span className="card__comments-count">2</span>
      </div>
    </li>
  );
}

export default Card;
