import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 210px;
  border: 1px solid grey;
  margin-top: 40px;
`;

export const Description = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-right: 20px;
  padding-left: 20px;
`;

export const ImgAvatar = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
  margin-top: 20px;
  border: 1px solid grey;
`;

export const InfoBlock = styled.p`
  margin: 0;
  text-align: center;
  margin-bottom: 10px;
  :last-child {
    margin-bottom: 0;
  }
`;

export const SocialBox = styled.ul`
  display: flex;
  margin-top: 20px;
  height: 80px;
`;

export const SocialItem = styled.li`
  display: grid;
  align-content: center;
  width: 70px;
  border: 1px solid grey;
  background-color: #9b9d9e;
`;

export const SocialTitle = styled.span`
  margin: 0;
  text-align: center;
`;

export const SocialInfo = styled.span`
  margin: 0;
  text-align: center;
`;
