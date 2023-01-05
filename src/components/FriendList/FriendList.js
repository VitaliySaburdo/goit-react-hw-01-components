import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return friends.map(({ id, isOnline, avatar, name }) => (
    <li className="item" key={id}>
      <span className="status">{isOnline === true ? 'Online' : 'Offline'}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  ));
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
