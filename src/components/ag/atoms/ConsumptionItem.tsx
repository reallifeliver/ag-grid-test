/** @jsx jsx */
import * as React from 'react';
import Text from 'components/ag/atoms/Input';
import Select from 'components/ag/atoms/Select';
import { css, jsx } from '@emotion/core';
interface Props {
  selectOptions: string[];
  label: string;
  inputValue: string | number;
  selectedOpt: string;
  className?: string;
}
const ConsumptionItem = ({ inputValue, label, selectedOpt, selectOptions, className }: Props) => {
  return (
    <div css={{ display: 'inline' }} className={className}>
      <Text label={label} value={inputValue} />
      <Select value={selectedOpt} width={40}>
        {selectOptions.map(el => (
          <Select.Option key={el} value={el} />
        ))}
      </Select>
    </div>
  );
};

export default ConsumptionItem;
