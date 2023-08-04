import Comment from '../comment/comment';
import './comments.scss';

function Comments({comments}) {

  return (
    <div className="comments">
      <h2 className="comments__title">4 Comments</h2>
      <ul className="comments__list">
        {comments.map(comment => {
          return(
            <Comment key={comment.id} comment={comment} />
          )
        })}
      </ul>
    </div>
  );
}

export default Comments;