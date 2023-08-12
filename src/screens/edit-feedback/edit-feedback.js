import { Link, useNavigate, useParams } from "react-router-dom";
import DropLeft from "../../assets/img/drop-left.svg";
import DropBottom from "../../assets/img/drop-bottom.svg";
import FilterBox from "../../components/filter-box/filter-box";
import { useEffect, useState } from "react";
import { feedbacksActions } from "../../store/feedbacks/feedbacks.slice";
import { useDispatch, useSelector } from "react-redux";
import "./edit-feedback.scss";

function EditFeedback({ ...props }) {
  const feedbackId = useParams().id;
  const path = `/feedback/${feedbackId}`;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [titleValue, setTitleValue] = useState('');
  const [description, setDescription] = useState('');

  const { feedbacksList, loading } = useSelector((state) => state.feedbacks)

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

  const currentFeedback = feedbacksList?.find((feedback) => {
    if (+feedback.id === +feedbackId) {
      if (titleValue === '') {
        setTitleValue(feedback.title);
      }
      if (description === '') {
        setDescription(feedback.description)
      }
      return feedback;
    }
  });

  function handleBtnClick(evt) {
    evt.preventDefault();
    const element = evt.target;

    if (element.className.includes('edit-feedback__form-btn--danger')) {
      dispatch(feedbacksActions.deleteFeedbacksItem(feedbackId));
      navigate('/');
    }
  }

  return (
    <div className="edit-feedback" onClick={handleBtnClick} {...props}>
      <Link to={path} className="edit-feedback__link">
        <img src={DropLeft} alt="drop left icon" width={"14"} height={"10"} />
        Go Back
      </Link>
      <form className="edit-feedback__form">
        <FilterBox className={"edit-feedback__form-box"}>
          <legend className="edit-feedback__form-legend">
            {currentFeedback?.title}
          </legend>

          <label className="edit-feedback__form-title">
            <span className="edit-feedback__form-title--span">
              Feedback Title
            </span>
            edit a short, descriptive headline
            <input
              className="edit-feedback__form-input"
              type="text"
              placeholder="Please add a dark theme option"
              value={titleValue}
              onChange={evt => setTitleValue(evt.target.value)}
            />
          </label>

          <div className="edit-feedback__form-category-select">
            <span className="edit-feedback__form-category-title">Category</span>
            <p className="edit-feedback__form-category--title">
              Choose a category for your feedback
            </p>
            <div className="edit-feedback__form-input edit-feedback__form-category-inner">
              Feature
              <img
                className="edit-feedback__form-drop-bottom"
                src={DropBottom}
                alt="drop bottom icon"
                width={"14"}
                height={"10"}
              />
            </div>
            <ul className="edit-feedback__form-category--list">
              <li className="edit-feedback__form-category--item">Feature</li>
              <li className="edit-feedback__form-category--item">UI</li>
              <li className="edit-feedback__form-category--item">UX</li>
              <li className="edit-feedback__form-category--item">
                Enhancement
              </li>
              <li className="edit-feedback__form-category--item">Bug</li>
            </ul>
          </div>

          <div className="edit-feedback__form-status">
            <span className="edit-feedback__form-status--title">
              Update Status
            </span>
            <p className="edit-feedback__form-status--title">
              Change feedback state
            </p>
            <div className="edit-feedback__form-input edit-feedback__form-status-inner">
              Planned
              <img
                className="edit-feedback__form-drop-bottom"
                src={DropBottom}
                alt="drop bottom icon"
                width={"14"}
                height={"10"}
              />
            </div>
            <ul className="edit-feedback__form-status--list">
              <li className="edit-feedback__form-status--item">Feature</li>
              <li className="edit-feedback__form-status--item">UI</li>
              <li className="edit-feedback__form-status--item">UX</li>
              <li className="edit-feedback__form-status--item">Enhancement</li>
              <li className="edit-feedback__form-status--item">Bug</li>
            </ul>
          </div>

          <label className="edit-feedback__form-details">
            <span className="edit-feedback__form-details--span">
              Feedback Detail
            </span>
            Include any specific comments on what should be improved, added,
            etc.
            <textarea className="edit-feedback__form-textarea" value={description} onChange={evt => setDescription(evt.target.value)} />
          </label>

          <div className="edit-feedback__form-buttons">
            <button className="edit-feedback__form-btn edit-feedback__form-btn--danger">Delete</button>
            <div className="edit-feedback__form-buttons--inner">
              <button className="edit-feedback__form-btn edit-feedback__form-btn--gray">Cancel</button>
              <button className="edit-feedback__form-btn">Add Feedback</button>
            </div>
          </div>
        </FilterBox>
      </form>
    </div>
  );
}

export default EditFeedback;
