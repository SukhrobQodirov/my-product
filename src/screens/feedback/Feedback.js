import Container from "../../components/container/container";
import Header from "../../components/header/header";
import HomeFilter from "../../components/home-filter/home-filter";
import './feedback.scss';
import CardsList from "../../components/cards-list/cards-list";

function Feedback() {
  return (
    <main id="main">
      <Container className="main__container">
        <HomeFilter />

        <div className="main-body">
          <Header/>
          <CardsList/>
        </div>
      </Container>
    </main>
  );
}

export default Feedback;
