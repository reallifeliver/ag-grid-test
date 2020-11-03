
import * as React from 'react';
import {OptionHTMLAttributes, SelectHTMLAttributes} from "react";
import styled from "@emotion/styled";

interface Props extends SelectHTMLAttributes<HTMLSelectElement>{
  width: number
};

const StyledSelect = styled.select<Props>`
 width: ${props => props.width};
 border: none;
`

const Select = ({children, ...rest}: Props) => {
  return (
    <StyledSelect {...rest}>
      {children}
    </StyledSelect>
  );
};

const Option = ({value, ...rest}: OptionHTMLAttributes<HTMLOptionElement>) => {
  return <option {...rest}>{value}</option>
}

Select.Option = Option
export default Select;