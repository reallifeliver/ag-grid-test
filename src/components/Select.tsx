
import * as React from 'react';
import {OptionHTMLAttributes, SelectHTMLAttributes} from "react";
import styled from "@emotion/styled";

interface Props {

};

const StyledSelect = styled.select({
  width: 40,
  border: 'none'
})

const Select = ({children, ...rest}: SelectHTMLAttributes<HTMLSelectElement>) => {
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