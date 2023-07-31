import { Route, Routes } from "react-router-dom";
import Feedback from "./screens/feedback/Feedback";

import './scss/main.scss';

function App() {
  return (
    <Routes>
      <Route path="/" Component={Feedback} />
    </Routes>
  );
}

export default App;