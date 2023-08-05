import { Link } from "react-router-dom";
import DropLeft from "../../assets/img/drop-left.svg";
import DropBottom from "../../assets/img/drop-bottom.svg";
import FilterBox from "../../components/filter-box/filter-box";
import "./add-feedback.scss";

function AddFeedback() {
  return (
    <div className="add-feedback">
      <Link to={"/"} className="add-feedback__link">
        <img src={DropLeft} alt="drop left icon" width={"14"} height={"10"} />
        Go Back
      </Link>
      <form className="add-feedback__form">
        <FilterBox className={"add-feedback__form-box"}>
          <legend className="add-feedback__form-legend">
            Create New Feedback
          </legend>
          <label className="add-feedback__form-title">
            <span className="add-feedback__form-title--span">
              Feedback Title
            </span>
            Add a short, descriptive headline
            <input className="add-feedback__form-input" type="text" />
          </label>
          <div className="add-feedback__form-category-select">
            <span className="add-feedback__form-category-title">Category</span>
            <p className="add-feedback__form-category-title">
              Choose a category for your feedback
            </p>
            <div className="add-feedback__form-input add-feedback__form-category-inner">
              Feature
              <img className="add-feedback__form-drop-bottom" src={DropBottom} alt="drop bottom icon" width={'14'} height={'10'} />
            </div>
            <ul className="add-feedback__form-category--list">
              <li className="add-feedback__form-category--item">Feature</li>
              <li className="add-feedback__form-category--item">UI</li>
              <li className="add-feedback__form-category--item">UX</li>
              <li className="add-feedback__form-category--item">Enhancement</li>
              <li className="add-feedback__form-category--item">Bug</li>
            </ul>
          </div>
          <label className="add-feedback__form-details">
            <span className="add-feedback__form-details--span">
              Feedback Detail
            </span>
            Include any specific comments on what should be improved, added,
            etc.
            <textarea className="add-feedback__form-textarea" />
          </label>
          <div className="add-feedback__form-buttons">
            <button className="add-feedback__form-btn add-feedback__form-btn--gray">
              Cancel
            </button>
            <button className="add-feedback__form-btn add-feedback__form-btn--slateblue">
              Add Feedback
            </button>
          </div>
        </FilterBox>
      </form>
    </div>
  );
}

export default AddFeedback;
