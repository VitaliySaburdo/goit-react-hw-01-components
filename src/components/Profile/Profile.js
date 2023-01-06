import PropTypes from 'prop-types';
import {
  Container,
  Description,
  ImgAvatar,
  InfoBlock,
  SocialBox,
  SocialItem,
  SocialTitle,
  SocialInfo,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container key={username}>
      <Description>
        <ImgAvatar src={avatar} alt="User avatar" />
        <InfoBlock>{username}</InfoBlock>
        <InfoBlock>{tag}</InfoBlock>
        <InfoBlock>{location}</InfoBlock>
      </Description>
      <SocialBox>
        <SocialItem>
          <SocialTitle>Followers</SocialTitle>
          <SocialInfo>{stats.followers}</SocialInfo>
        </SocialItem>
        <SocialItem>
          <SocialTitle>Views</SocialTitle>
          <SocialInfo>{stats.views}</SocialInfo>
        </SocialItem>
        <SocialItem>
          <SocialTitle>Likes</SocialTitle>
          <SocialInfo>{stats.likes}</SocialInfo>
        </SocialItem>
      </SocialBox>
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
