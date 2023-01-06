import styled from 'styled-components';

export const Table = styled.table`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  border: 1px solid grey;
  margin-top: 40px;
  margin-bottom: 40px;
  border-collapse: collapse;
`;

export const Head = styled.thead`
  height: 40px;
  background-color: grey;
`;
export const Colums = styled.td`
  width: 100vh;
  height: 30px;
  text-align: center;
  border: 1px solid grey;
`;

export const ColumsHead = styled.th`
  width: 100vh;
  height: 30px;
  text-align: center;
  border: 1px solid black;
`;
