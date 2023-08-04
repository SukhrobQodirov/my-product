import { Link, useParams } from "react-router-dom";
import DropLeft from "../../assets/img/drop-left.svg";
import EditFeedbackBtn from "../../components/edit-feedback-btn/edit-feedback-btn";
import Card from "../../components/card/card";
import "./details.scss";
import { useEffect, useState } from "react";
import Comments from "../../components/comments/comments";

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
        <Link className="details__header-link" to={"/"}>
          <img
            className="details__header-link--icon"
            src={DropLeft}
            alt="drop left icon"
            width={"10"}
            height={"14"}
          />
          Go Back
        </Link>
        <EditFeedbackBtn />
      </div>
      <Card data={currentFeedback} />
      {commentsArr?<Comments comments={commentsArr} />:null}
    </div>
  );
}

export default Details;
