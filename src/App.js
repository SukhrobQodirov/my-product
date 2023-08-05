import { Route, Routes } from "react-router-dom";
import Feedback from "./screens/feedback/Feedback";
import AddFeedback from "./screens/add-feedback/AddFeedback";
import Details from "./screens/details/details";
import EditFeedback from "./screens/edit-feedback/edit-feedback";

import './scss/main.scss';

function App() {
  return (
    <Routes>
      <Route path="/" Component={Feedback} />
      <Route path="/add-feedback" Component={AddFeedback} />
      <Route path="/feedback/:id" Component={Details} />
      <Route path="/edit-feedback/:id" Component={EditFeedback} />
    </Routes>
  );
}

export default App;