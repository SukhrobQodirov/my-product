import { Route, Routes } from "react-router-dom";
import Feedback from "./screens/feedback/Feedback";
import AddFeedback from "./screens/add-feedback/AddFeedback";
import Details from "./screens/details/details";

import './scss/main.scss';

function App() {
  return (
    <Routes>
      <Route path="/" Component={Feedback} />
      <Route path="/add-feedback" Component={AddFeedback} />
      <Route path="/feedback/:id" Component={Details} />
    </Routes>
  );
}

export default App;