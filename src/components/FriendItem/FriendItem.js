import PropTypes from 'prop-types';
import { ContactBox, Bage } from './FriendItem.stiled';

export const FriendItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <ContactBox>
      <Bage isOnline={isOnline}></Bage>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </ContactBox>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.exact({
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};
