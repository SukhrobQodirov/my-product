import { Link, useParams } from "react-router-dom";
import DropLeft from "../../assets/img/drop-left.svg";
import Card from "../../components/card/card";
import "./details.scss";
import { useEffect, useState } from "react";
import Comments from "../../components/comments/comments";
import AddComment from "../../components/add-comment/add-comment";
import AddFeedbackBtn from "../../components/add-feedback-btn/add-feedback-btn";

function Details() {
  const feedbackId = useParams().id;
  const [data, setData] = useState();
  const [isFetched, setFetched] = useState(false);

  useEffect(() => {
    if (!isFetched) {
      setFetched(true);
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => {
          setData({
            ...data,
            productRequests: data.productRequests.map((product) => ({
              ...product,
              isLiked: false,
            })),
          });
        });
    }
  }, [isFetched]);

  if (!data) {
    return null;
  }

  const currentFeedback = data.productRequests.find((feedback) => {
    return +feedback.id === +feedbackId;
  });
  const commentsArr = currentFeedback.comments;

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
      {commentsArr?<Comments comments={commentsArr} />:null}
      <AddComment className={'details__add-comment'}/>
    </div>
  );
}

export default Details;
