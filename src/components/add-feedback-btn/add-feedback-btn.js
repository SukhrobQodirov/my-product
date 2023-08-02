import { Link } from "react-router-dom";
import './add-feedback-btn.scss';

function AddFeedbackBtn({path, className="", ...props}) {
  return(
    <Link to={path} className={`add-feedback-btn ${className}`} {...props}>
      + Add Feedback
    </Link>
  )
}

export default AddFeedbackBtn;