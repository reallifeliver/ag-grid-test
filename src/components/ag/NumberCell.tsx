/** @jsx jsx */
import * as React from 'react';
import styled from '@emotion/styled';
import Input from 'components/ag/atoms/Input';
import { css, jsx } from '@emotion/core';

interface Props {
  value: number;
}

const Wrapper = styled.div``;
const inputStyle = css`
  width: 100%;
`;

const TextCell = ({ value }: Props) => {
  return (
    <Wrapper>
      <Input css={inputStyle} value={value} />
    </Wrapper>
  );
};

export default TextCell;
