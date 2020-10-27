/** @jsx jsx */
import * as React from 'react';
import Input from "components/Input";
import Select from "components/Select";
import { css, jsx } from '@emotion/core';
interface Props {
  selectOptions: string[],
  label: string,
  inputValue: string | number,
  selectedOpt: string,
};
const Consumption = ({inputValue, label, selectedOpt, selectOptions}: Props) => {
  return (
    <div css={{display: 'inline'}}>
      <Input label={label} value={inputValue} />
      <Select value={selectedOpt}>
        {selectOptions.map(el => <Select.Option value={el}/>)}
      </Select>
    </div>
  );
};

export default Consumption;