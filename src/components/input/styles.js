// src/components/input/styles.js
import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  max-width: 275px;
  height: 30px;
  border-bottom: 1px solid #3b3456;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const IconContainer = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const InputText = styled.input`
  background-color: transparent;
  color: #FFFFFF;
  border: none;
  height: 30px;
  width: 100%;
  outline: none;
`;
