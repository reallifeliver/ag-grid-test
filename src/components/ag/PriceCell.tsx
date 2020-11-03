import * as React from 'react';
import styled from '@emotion/styled';
import Input from 'components/ag/atoms/Input';

type Currency = 'won' | 'dollar';

const currencySymbol: { [key in Currency]: string } = {
  won: '₩',
  dollar: '$',
};

interface Props {
  currency: 'won' | 'dollar';
  value: number;
}

const Wrapper = styled.div``;
const CurrencySymbol = styled.span`
  margin-right: 5px;
  font-size: 11px;
  line-height: 1.45;
  letter-spacing: -0.3px;
  color: #19191a;
`;

const PriceCell = ({ currency, value }: Props) => {
  return (
    <Wrapper>
      <CurrencySymbol>{currencySymbol[currency]}</CurrencySymbol>
      <Input value={value} width={'100%'} />
    </Wrapper>
  );
};

export default PriceCell;
