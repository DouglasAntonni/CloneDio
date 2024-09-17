import React from 'react';
import { Controller } from "react-hook-form"
import { IconContainer, InputText, InputContainer, ErrorText } from './styles';

const Input = ({ lefticon, name, control, errorMessage, ...rest }) => {
  return (
    <>
    <InputContainer>
      {lefticon && <IconContainer>{lefticon}</IconContainer>}
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <InputText {...field} {...rest} />}
        />
      
    </InputContainer>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
  </>
  );
};

export { Input };
