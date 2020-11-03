import * as React from 'react';
import styled from '@emotion/styled';

interface Props {
  value: string;
}

const Wrapper = styled.div``;

const ColorBox = styled.span<{ color: string }>`
  background-color: ${props => props.color};
  width: 15px;
  height: 15px;
  margin-right: 10px;
  display: inline-block;
`;

const ColorCell = ({ value }: Props) => {
  return (
    <Wrapper>
      <ColorBox color={value} />
      {value}
    </Wrapper>
  );
};

export default ColorCell;
