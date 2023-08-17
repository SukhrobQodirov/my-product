import ReplyBtn from "../reply-btn/reply-btn";
import UserPic from '../../assets/img/user-james.png';
import ReplyCard from "../reply-card/reply-card";
import './comment.scss';

function Comment({comment, ...props}) {
  const {id, content, user} = comment;

  return(
    <li className="comment" data-id={id} {...props}>
      <img className="comment__user-pic" src={UserPic} alt="user avatar" width={'40'} height={'40'} />
      <div className="comment__inner">
        <div className="comment__header">
          <div className="comment__user-info">
            <h3 className="comment__user-name">{user.name}</h3>
            <p className="comment__user-nickname">{`@${user.username}`}</p>
          </div>
          <ReplyBtn/>
        </div>
        <div className="comment__body">
          <p className="comment__body-text">{content}</p>
        </div>
      </div>
      <ul className="comment__replies">
        {comment.replies ? comment.replies.map(reply => {
          return <ReplyCard key={reply.id} className="comment__reply" data={reply}/> 
        }) : null}
      </ul>
    </li>
  );
}

export default Comment;