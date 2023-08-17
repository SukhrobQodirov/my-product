import { Link, useNavigate } from "react-router-dom";
import DropLeft from "../../assets/img/drop-left.svg";
import FilterBox from "../../components/filter-box/filter-box";
import "./add-feedback.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Selector from "../../components/selector/selector";
import { feedbacksActions } from "../../store/feedbacks/feedbacks.slice";

export const Categories = [
  {
    id: 1,
    name: 'Features',
  },
  {
    id: 2,
    name: 'UI',
  },
  {
    id: 3,
    name: 'UX',
  },
  {
    id: 4,
    name: 'Enhancement',
  },
  {
    id: 5,
    name: 'Bug',
  },
]

function AddFeedback() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { feedbacksList, currentCategory } = useSelector((state) => state.feedbacks)
  const [newFeedbackTitle, setNewFeedbackTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [category, setCategory] = useState("Features");

  useEffect(() => {
    if (!feedbacksList) {
      dispatch(feedbacksActions.setLoading())
      fetch('/data.json')
        .then(res => res.json())
        .then(data => {
          dispatch(feedbacksActions.setFeedbacksList(data.productRequests));
        })
        .catch(err => {
          dispatch(feedbacksActions.setError(err))
        })
    }
  }, []);

  let newFeedback = {
    id: feedbacksList?.length + 1,
    title: newFeedbackTitle,
    category: currentCategory,
    upvotes: 0,
    status: "planned",
    description: newDescription,
    comments: [],
  }

  const categorySelectParams = {
    title: "Category",
    subtitle: "Choose a category for your feedback",
    currentValue: category,
    arr: Categories.slice(),
    selectorType: 'category',
  }

  function handleAddBtnClicked(evt) {
    evt.preventDefault();
    dispatch(feedbacksActions.setFeedbacksList([
      newFeedback,
      ...feedbacksList,
    ]))
    navigate('/');
  }

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
            <input className="add-feedback__form-input" type="text" onChange={evt => setNewFeedbackTitle(evt.target.value)} />
          </label>
          <Selector className={'categories-selector'} selectParams={categorySelectParams} />
          <label className="add-feedback__form-details">
            <span className="add-feedback__form-details--span">
              Feedback Detail
            </span>
            Include any specific comments on what should be improved, added,
            etc.
            <textarea className="add-feedback__form-textarea" onChange={evt => setNewDescription(evt.target.value)} />
          </label>
          <div className="add-feedback__form-buttons">
            <button className="add-feedback__form-btn add-feedback__form-btn--gray">
              Cancel
            </button>
            <button className="add-feedback__form-btn add-feedback__form-btn--slateblue" onClick={handleAddBtnClicked}>
              Add Feedback
            </button>
          </div>
        </FilterBox>
      </form>
    </div>
  );
}

export default AddFeedback;
