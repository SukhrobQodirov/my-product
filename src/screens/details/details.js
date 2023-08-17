import { Link, useParams } from "react-router-dom";
import DropLeft from "../../assets/img/drop-left.svg";
import Card from "../../components/card/card";
import "./details.scss";
import { useEffect, useState } from "react";
import Comments from "../../components/comments/comments";
import AddComment from "../../components/add-comment/add-comment";
import AddFeedbackBtn from "../../components/add-feedback-btn/add-feedback-btn";
import { useDispatch, useSelector } from "react-redux";
import { feedbacksActions } from "../../store/feedbacks/feedbacks.slice";

function Details() {
  const dispatch = useDispatch();
  const feedbackId = useParams().id;
  const { feedbacksList, currentCategory } = useSelector((state) => state.feedbacks)

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

  const currentFeedback = feedbacksList.find((feedback) => {
    return +feedback.id === +feedbackId;
  });

  const commentsArr = currentFeedback.comments? currentFeedback.comments : [];

  return (
    <div className="details">
      <div className="details__header">
        <Link className="details__header-link" to={`/`}>
          <img
            className="details__header-link--icon"
            src={DropLeft}
            alt="drop left icon"
            width={"10"}
            height={"14"}
          />
          Go Back
        </Link>
        {/* <EditFeedbackBtn to={`/edit-feedback/${feedbackId}`} /> */}
        <AddFeedbackBtn path={`/edit-feedback/${feedbackId}`} className="add-feedback-btn--success" textContent="Edit Feedback" />
      </div>
      <Card data={currentFeedback} />
      {commentsArr !== []?<Comments comments={commentsArr} />:null}
      <AddComment className={'details__add-comment'}/>
    </div>
  );
}

export default Details;
