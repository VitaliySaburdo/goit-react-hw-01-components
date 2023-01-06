import PropTypes from 'prop-types';
import { Section } from './FriendList.styled';
import { FriendItem } from '../FriendItem/FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <Section>
      {friends.map(friend => (
        <FriendItem key={friend.id} friend={friend} />
      ))}
    </Section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
