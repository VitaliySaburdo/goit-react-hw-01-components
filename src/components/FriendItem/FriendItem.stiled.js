import styled from 'styled-components';

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
