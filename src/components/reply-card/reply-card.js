import UserPic from "../../assets/img/user-james.png";

import "./reply-card.scss";

function ReplyCard({ data, className='', ...props }) {
  const { content, replyingTo, user } = data;

  return (
    <li className={`reply ${className}`} {...props}>
      <img
        className="reply__user-pic"
        src={UserPic}
        alt="user avatar"
        width={"40"}
        height={"40"}
      />
      <div className="reply__inner">
        <div className="reply__user-info">
          <h3 className="reply__user-name">{user.name}</h3>
          <p className="reply__user-nickname">{`@${user.username}`}</p>
        </div>
        <p className="reply__content">
          <span className="reply__content-text">{`@${replyingTo}`}</span> {content}
        </p>
      </div>
    </li>
  );
}

export default ReplyCard;
