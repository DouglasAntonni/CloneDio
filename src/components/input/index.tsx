import React from 'react';
import { Controller } from "react-hook-form"
import { IconContainer, InputText, InputContainer, ErrorText } from './styles';
import {  } from "./types";
import { IInput } from './types';

const Input = ({ lefticon, name, control, errorMessage, ...rest }: IInput) => {
  return (
    <>
    <InputContainer>
      {lefticon && <IconContainer>{lefticon}</IconContainer>}
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field: {value, onChange} }) => 
        <InputText value={value} onChange={onChange} {...rest} />}
        />
       
    </InputContainer>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
  </>
  );
};

export { Input };
