import React from 'react';
import { IconContainer, InputText, InputContainer } from './styles';

const Input = ({ lefticon, ...rest }) => {
  return (
    <InputContainer>
      {lefticon && <IconContainer>{lefticon}</IconContainer>}
      <InputText {...rest} />
    </InputContainer>
  );
};

export { Input };
