import * as React from 'react';
import Consumption from "components/Consumption";
import styled from "@emotion/styled";

interface Props {
  value: {width: number, length: number},
  selectedWidthUnit: string,
  selectedLengthUnit: string,
};

const CellWrapper = styled.div({

})


const ConsumptionCell = ({value, selectedLengthUnit, selectedWidthUnit}: Props) => {
  return (
    <CellWrapper>
      <Consumption  selectOptions={['inch', 'yd']} label={'Width'} inputValue={value.width} selectedOpt={selectedWidthUnit}  />
      <Consumption selectOptions={['inch', 'yd']} label={'Length'} inputValue={value.length} selectedOpt={selectedLengthUnit} />
    </CellWrapper>
  );
};

export default ConsumptionCell;