import DropLeft from "../../assets/img/drop-left.svg";
import FilterBox from "../../components/filter-box/filter-box";
import Selector from "../../components/selector/selector";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { feedbacksActions } from "../../store/feedbacks/feedbacks.slice";
import { useDispatch, useSelector } from "react-redux";
import "./edit-feedback.scss";

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

export const Status = [
  {
    id: 1,
    name: 'Suggestion',
  },
  {
    id: 2,
    name: 'Planned',
  },
  {
    id: 3,
    name: 'In-Progress',
  },
  {
    id: 4,
    name: 'Live',
  }
]

function EditFeedback({ ...props }) {
  const feedbackId = useParams().id;
  const path = `/feedback/${feedbackId}`;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { feedbacksList, loading, currentCategory, currentStatus } = useSelector((state) => state.feedbacks)

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
      return feedback;
    }
  });

  const [titleValue, setTitleValue] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState("Features");
  const [status, setStatus] = useState("Planned");

  useEffect(() => {
    if (currentFeedback) {
      setTitleValue(currentFeedback.title);
      setDescription(currentFeedback.description);
      setCategory(currentFeedback.category);
      setStatus(currentFeedback.status);
    }
  }, [currentFeedback])

  function handleBtnClick(evt) {
    evt.preventDefault();
    const element = evt.target;

    if (element.className.includes('edit-feedback__form-btn--danger')) {
      dispatch(feedbacksActions.deleteFeedbacksItem(feedbackId));
      navigate('/');
    } else if (element.className.includes('edit-feedback__btn')) {
      const newObj = {
        ...currentFeedback,
        title: titleValue,
        description: description,
        category: currentCategory,
        status: currentStatus,
      }
      dispatch(feedbacksActions.editFeedback(newObj))
      navigate('/');
    } else if (element.className.includes('edit-feedback__form-btn--gray')) {
      navigate('/');
    }
  }

  const categorySelectParams = {
    title: "Category",
    subtitle: "Choose a category for your feedback",
    currentValue: category,
    arr: Categories.slice(),
  }

  const statusSelectParams = {
    title: "Update Status",
    subtitle: "Change feedback state",
    currentValue: status,
    arr: Status.slice(),
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

          <Selector className={'categories-selector'} selectParams={categorySelectParams} />

          <Selector className={'status-selector'} selectParams={statusSelectParams} />

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
              <button className="edit-feedback__form-btn edit-feedback__btn">Edit Feedback</button>
            </div>
          </div>
        </FilterBox>
      </form>
    </div>
  );
}

export default EditFeedback;
