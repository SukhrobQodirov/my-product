import { useEffect, useState } from "react";
import AddFeedbackBtn from "../add-feedback-btn/add-feedback-btn";
import NotFoundIcon from '../../assets/img/not-found-icon.png';

import './not-found.scss';

function NotFound() {

  const [data, setData] = useState();
  const [ isFetched, setFetched ] = useState(false);

  useEffect(() => {
    if (!isFetched) {
      setFetched(true);
      fetch('/data.json')
        .then(res => res.json())
        .then(data => {
          setData({
            ...data,
            productRequests: data.productRequests.map(product => ({
              ...product,
              isLiked: false,
            }))
          });
        });
    }
  }, [isFetched]);

  if (!data) {
    return null;
  }

  return (
   <div className="not-found">
    <img src={NotFoundIcon} alt="not found icon" width={'130'} height={'137'} />
    <div className="not-found__content">
      <h2 className="not-found__title">There is no feedback yet.</h2>
      <p className="not-found__subtitle">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
      <AddFeedbackBtn path={'/add-feedback'} />
    </div>
   </div>
  );
}

export default NotFound;
