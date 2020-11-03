import { ColDef } from 'ag-grid-community';
import * as Cells from 'components/ag';

export type ColType =
  | 'number'
  | 'text'
  | 'consumption'
  | 'image'
  | 'color'
  //| 'select'
  //| 'description'
  | 'price';

// 필수로 정의되어야 하는 값의 경우 override
//TODO cell type 별로 공통으로 처리되어야 하는 커스텀 옵션이 있다면 여기서 extends
// https://www.ag-grid.com/javascript-grid-column-properties/
export interface TechPackColDef extends ColDef {
  type: ColType;
  headerName: string;
  field: string;
}

interface CustomCellAppliedColDef extends ColDef {
  cellRenderer: keyof typeof Cells;
}

export const techPackColTypes: { [key in ColType]: CustomCellAppliedColDef } = {
  price: {
    cellRenderer: 'PriceCell',
    aggFunc: 'sum', // TODO 이거 어떻게 쓰는지 알아보자
  },
  consumption: {
    cellRenderer: 'ConsumptionCell',
    minWidth: 350,
  },
  image: {
    cellRenderer: 'ImageCell',
    editable: false,
  },
  color: {
    cellRenderer: 'ColorCell',
    editable: false,
  },
  number: {
    cellRenderer: 'NumberCell',
  },
  text: {
    cellRenderer: 'TextCell',
  },
};

// Column Type
// Column Type에 맞는 Cell의 타입이 있어야 한다.
// interface ColumnCommon extends ColDef {
//   editable: boolean;
//   width?: number;
// }
// interface NumberColumn extends ColumnCommon {
//   value: number;
// }
//
// interface TextColumn extends ColumnCommon {
//   value: string;
// }
//
// interface ConsumptionColumn extends ColumnCommon {
//   value: { width: number; length: number };
// }
// export interface Column {
//   type: ColTyp
// }
