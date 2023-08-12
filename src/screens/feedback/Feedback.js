import Container from "../../components/container/container";
import Header from "../../components/header/header";
import HomeFilter from "../../components/home-filter/home-filter";
import CardsList from "../../components/cards-list/cards-list";
import { useEffect, useState } from "react";
import NotFound from "../../components/not-found/not-found";
import { useDispatch, useSelector } from "react-redux";
import { feedbacksActions } from "../../store/feedbacks/feedbacks.slice";


import './feedback.scss';


function Feedback() {
  const dispatch = useDispatch();
  const {feedbacksList, loading} = useSelector((state) => state.feedbacks);


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

  if(loading) {
    return(
      <p>...Loading</p>
    )
  }

  return (
    <main id="main">
      <Container className="main__container">
        <HomeFilter />

        <div className="main-body">
          <Header/>
          <CardsList />
          {/* <NotFound/> */}
        </div>
      </Container>
    </main>
  );
}

export default Feedback;
