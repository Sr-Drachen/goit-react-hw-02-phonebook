import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 10px;
  border-radius: 30px;
  background-color: #2e85a1;
  border: 3px solid #001C30;
  list-style: none;
  font-weight: 500;
`;

export const Item = styled.li`
  background-color: #ffffff;
  border: 1px solid #001C30;
  padding: 10px;
  border-radius: 30px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 10px 10px;
  font: inherit;
  cursor: pointer;
  border-radius: 20px;
  border: 2px solid #64CCC5;
  background-color: #001C30;
  font-weight: 700;
  color: #64CCC5;
`;