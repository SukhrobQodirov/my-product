import { Link } from "react-router-dom";

function AddFeedbackBtn({path, ...props}) {
  return(
    <Link to={path} {...props}>
      + Add Feedback
    </Link>
  )
}

export default AddFeedbackBtn;