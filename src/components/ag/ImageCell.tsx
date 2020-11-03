import * as React from 'react';
import styled from '@emotion/styled';

interface Props {
  value: string;
}

const Wrapper = styled.div``;

const Image = styled.span<{ image: string }>`
  background: url(${props => props.image}) no-repeat;
  width: 29px;
  height: 29px;
  display: inline-block;
  background-color: #282c34;
`;
const ImageCell = ({ value }: Props) => {
  return (
    <Wrapper>
      <Image image={value} />
    </Wrapper>
  );
};

export default ImageCell;
