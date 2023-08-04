import './edit-feedback-btn.scss';

function EditFeedbackBtn({className='', ...props}) {
  return(
    <button className={`edit-feedback-btn ${className}`} {...props} >Edit Feedback</button>
  )
}

export default EditFeedbackBtn;