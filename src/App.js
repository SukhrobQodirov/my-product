import { Route, Routes } from "react-router-dom";
import Feedback from "./screens/feedback/Feedback";
import AddFeedback from "./screens/add-feedback/AddFeedback";
import './scss/main.scss';

function App() {
  return (
    <Routes>
      <Route path="/" Component={Feedback} />
      <Route path="/add-feedback" Component={AddFeedback} />
    </Routes>
  );
}

export default App;