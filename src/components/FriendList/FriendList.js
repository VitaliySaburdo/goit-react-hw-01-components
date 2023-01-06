import PropTypes from 'prop-types';
import { Section, ContactBox, Bage } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Section>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <ContactBox key={id}>
          <Bage isOnline={isOnline}></Bage>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </ContactBox>
      ))}
    </Section>
  );
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
