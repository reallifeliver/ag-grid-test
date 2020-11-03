import * as React from 'react';
import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const StyledInput = styled.input({
  width: 52,
  borderRadius: 5,
  border: 'solid 1px #e1e2e3 ',
  height: 27,
});

const StyledLabel = styled.label({
  fontSize: 10,
  color: '#a2a2a4',
  marginRight: 10,
});
const Input = ({ label, ...rest }: Props) => {
  return (
    <span>
      <StyledLabel htmlFor={rest.id}>{label}</StyledLabel>
      <StyledInput {...rest} onChange={() => {}} />
    </span>
  );
};

export default Input;
