import { Link } from "react-router-dom";
import './add-feedback-btn.scss';

function AddFeedbackBtn({path, className="", textContent='+ Add Feedback', ...props}) {
  return(
    <Link to={path} className={`add-feedback-btn ${className}`} {...props}>
      {textContent}
    </Link>
  )
}

export default AddFeedbackBtn;