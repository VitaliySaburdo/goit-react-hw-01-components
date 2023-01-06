import styled from 'styled-components';

export const Section = styled.section`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  border: 1px solid grey;
  margin-top: 40px;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin: 20px;
`;

export const StatsBox = styled.ul`
  display: flex;
  height: 60px;
`;

export const StatItem = styled.li`
  display: grid;
  align-content: center;
  width: 100%;
  border: 1px solid grey;
  background-color: aqua;
  /* background-color: #${Math.floor(Math.random() * 16777215).toString(16)}; */
`;

export const StatTitle = styled.span`
  margin: 0;
  text-align: center;
`;
