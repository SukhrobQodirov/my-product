import Container from "../../components/container/container";
import Header from "../../components/header/header";
import HomeFilter from "../../components/home-filter/home-filter";
import './feedback.scss';
import CardsList from "../../components/cards-list/cards-list";
import { useEffect, useState } from "react";
import NotFound from "../../components/not-found/not-found";

function Feedback() {

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
    <main id="main">
      <Container className="main__container">
        <HomeFilter />

        <div className="main-body">
          <Header/>
          <CardsList data={data.productRequests}/>
          {/* <NotFound/> */}
        </div>
      </Container>
    </main>
  );
}

export default Feedback;
