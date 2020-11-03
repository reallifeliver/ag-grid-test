/** @jsx jsx */
import * as React from 'react';
import { css, jsx } from '@emotion/core';
import ConsumptionItem from 'components/ag/atoms/ConsumptionItem';
import styled from '@emotion/styled';

interface Props {
  value: { width: number; length: number };
  selectedWidthUnit: string;
  selectedLengthUnit: string;
}

const Wrapper = styled.div`
  display: flex;
`;

const itemStyle = css`
  flex: 1 1 auto;
`;
const ConsumptionCell = ({ value, selectedLengthUnit, selectedWidthUnit }: Props) => {
  return (
    <Wrapper>
      <ConsumptionItem
        css={itemStyle}
        selectOptions={['inch', 'yd']}
        label={'Width'}
        inputValue={value.width}
        selectedOpt={selectedWidthUnit}
      />
      <ConsumptionItem
        css={itemStyle}
        selectOptions={['inch', 'yd']}
        label={'Length'}
        inputValue={value.length}
        selectedOpt={selectedLengthUnit}
      />
    </Wrapper>
  );
};

export default ConsumptionCell;
