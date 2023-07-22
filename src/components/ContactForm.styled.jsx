import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: #2e85a1;
  border: 3px solid #001C30;
  border-radius: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #001C30;
  font-weight: 700;
  font-size: 20px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 30px;
  font-weight: 500;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 30px;
  background-color: #001C30;
  border: 3px solid #64CCC5;
  color: #64CCC5;
  font-size: 20px;
  font-weight: 700;`
  ;