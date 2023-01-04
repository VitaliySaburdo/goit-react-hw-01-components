import PropTypes, { arrayOf } from 'prop-types';
export const FriendList = ({ friends }) => {
  return friends.map(friend => (
    <li className="item" key={friend.id}>
      <span className="status">
        {friend.isOnline === true ? 'Online' : 'Offline'}
      </span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  ));
};

FriendList.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
  friends: arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};