import Container from "../../components/container/container";
import Header from "../../components/header/header";
import HomeFilter from "../../components/home-filter/home-filter";
import MainBody from "../../components/main-body/main-body";

function Feedback() {
  return (
    <main id="main">
      <Container className="main__container">
        <HomeFilter />

        <div className="main-body">
          <Header/>
          <MainBody/>
        </div>
      </Container>
    </main>
  );
}

export default Feedback;
