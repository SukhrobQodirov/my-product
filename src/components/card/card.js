import CategoryRadio from "../category-radio/category-radio";
import DropUpBlue from "../../assets/img/drop-up-blue.svg";
import DropUpLight from "../../assets/img/drop-up.svg";
import Comments from "../../assets/img/comments-icon.svg";
import "./card.scss";
import { Link } from "react-router-dom";

function Card({ className = "", data, ...props }) {
  const {
    id,
    title,
    category,
    upvotes,
    status,
    description,
    isLiked,
    comments,
  } = data;

  return (
    <li className={`card ${className}`} data-id={id}>
      <button className={`card__btn ${isLiked ? "card__btn--clicked" : ""}`}>
        <img
          src={isLiked ? DropUpLight : DropUpBlue}
          alt="drop up"
          className="card__btn-img"
          width={"10"}
          height={"6"}
        />
        {upvotes}
      </button>

      <div className="card__content">
        <h2 className="card__title">
          <Link to={`/feedback/${id}`}>{title}</Link>
        </h2>
        <p className="card__desc">{description}</p>
        <CategoryRadio>{category}</CategoryRadio>
      </div>
      <div className="card__comments">
        <img
          className="card__comments-icon"
          src={Comments}
          alt="comments icon"
          width={"18"}
          height={"16"}
        />
        <span className="card__comments-count">
          {comments ? comments.length : 0}
        </span>
      </div>
    </li>
  );
}

export default Card;
