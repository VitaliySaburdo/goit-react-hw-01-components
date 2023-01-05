import PropTypes from 'prop-types';
import { Container, Description, ImgAvatar, InfoBlock } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <Container key={username}>
      <Description>
        <ImgAvatar src={avatar} alt="User avatar" />
        <InfoBlock>{username}</InfoBlock>
        <InfoBlock>{tag}</InfoBlock>
        <InfoBlock>{location}</InfoBlock>
      </Description>
      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
