import styled from 'styled-components';

export const Section = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 200px;

  margin-top: 40px;
`;

export const ContactBox = styled.li`
  display: flex;
  gap: 5px;
  padding: 5px;
  align-items: center;
  border: 1px solid grey;
`;

export const Bage = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
