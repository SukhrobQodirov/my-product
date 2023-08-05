import AddFeedbackBtn from "../add-feedback-btn/add-feedback-btn";
import './add-comment.scss';

function AddComment({className, ...props}) {
  return(
    <div className={`add-comment ${className}`}>
      <h2 className="add-comment__title">Add Comment</h2>
      <textarea className="add-comment__textarea" placeholder="Type your comment here" />
      <div className="add-comment__inner">
        <p className="add-comment__text">250 Characters left</p>
        <AddFeedbackBtn textContent="Add Comment" />
      </div>
    </div>
  )
}

export default AddComment;