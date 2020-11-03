import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {
  ColDef,
  ColumnMovedEvent,
  DragStoppedEvent,
  GridApi,
  GridOptions,
} from 'ag-grid-community';
import * as Cells from 'components/ag';
import { techPackColTypes, TechPackColDef } from 'types/webtechpack';

const App = () => {
  const data = [
    {
      no: 1,
      itemNo: 'test',
      color: 'red',
      texture: '/test-image.png',
      marker: '/test-image.png',
      consumption: { width: 10, length: 10 },
      unitPrice: 10,
      totalPrice: 10,
    },
    {
      no: 1,
      itemNo: 'test',
      color: 'red',
      texture: '/test-image.png',
      marker: '/test-image.png',
      consumption: { width: 10, length: 10 },
      unitPrice: 10,
      totalPrice: 10,
    },
    {
      no: 1,
      itemNo: 'test',
      color: 'red',
      texture: '/test-image.png',
      marker: '/test-image.png',
      consumption: { width: 10, length: 10 },
      unitPrice: 10,
      totalPrice: 10,
    },
    {
      no: 1,
      itemNo: 'test',
      color: 'red',
      texture: '/src/logo.svg',
      marker: '/test-image.png',
      consumption: { width: 10, length: 10 },
      unitPrice: 10,
      totalPrice: 10,
    },
    {
      no: 1,
      itemNo: 'test',
      color: 'red',
      texture: '/test-image.png',
      marker: '/test-image.png',
      consumption: { width: 10, length: 10 },
      unitPrice: 10,
      totalPrice: 10,
    },
  ];

  const [gridApi, setGridApi] = useState<GridApi>();
  const [rowData, setRowData] = useState<any[]>(data);
  const [gridColumnApi, setGridColumnApi] = useState();
  const [gridWidth, setGridWidth] = useState<number | string>(1300);
  const onGridReady = (params: any) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  useEffect(() => {
    gridApi?.sizeColumnsToFit();
  }, [gridApi]);

  useEffect(() => {
    gridApi?.doLayout();
    console.log(gridApi);
  }, [gridWidth]);

  // const onChangeCell = (ev: any) => {
  //   // FIXME type이 뭐야?
  //   console.log(ev);
  //   console.log(ev.newValue, ev.oldValue, ev.node.rowIndex);
  // };

  const column: TechPackColDef[] = [
    { type: 'number', field: 'no', headerName: 'No.', editable: false },
    { type: 'text', field: 'itemNo', headerName: 'Item No.', editable: false },
    { type: 'color', field: 'color', headerName: 'Color', editable: false },
    { type: 'image', field: 'texture', headerName: 'Texture', editable: false },
    { type: 'image', field: 'marker', headerName: 'Marker', editable: false },
    { type: 'consumption', field: 'consumption', headerName: 'Consumption' },
    { type: 'price', field: 'unitPrice', headerName: 'Unit Price' },
    { type: 'price', field: 'totalPrice', headerName: 'Total Price' },
  ];

  const addData = () => {
    setRowData([
      ...rowData,
      {
        no: 1,
        itemNo: 'test',
        color: 'red',
        texture: '/test-image.png',
        marker: '/test-image.png',
        consumption: { width: 10, length: 10 },
        unitPrice: 10,
        totalPrice: 10,
      },
    ]);
  };

  // 각각 옵션을 AgGridReact에 props로 넘겨줄 수도 있다.
  const gridOption: GridOptions = {
    columnDefs: column.map<ColDef>(col => ({
      ...col,
      cellEditorParams: { test: 1, asd: 123 }, // Custom Cell에 custom Props를 넘겨줄 수 있다.
      cellRendererParams: { test: 1, asd: 123 },
    })),
    defaultColDef: {
      // 컬럼간에 기본 속성을 정의할 수 있다. 컬럼 properties는 여기에 https://www.ag-grid.com/javascript-grid-column-properties/
      editable: true,
      //lockPosition: true, // 컬럼의 이동을 막는다.
      resizable: true,
      //autoHeight: true, // 높이 자동 조정 description에?
      // valueGetter(pa) {
      //   console.log(pa);
      // },
      // suppressAutoSize: true,
      // suppressMovable: false,
      // filter: 'agTextColumnFilter',
    },
    columnTypes: techPackColTypes,
    frameworkComponents: Cells,
    onDragStopped(event: DragStoppedEvent): void {
      //이런 이벤트 함수들이 많다.
      console.log(event);
    },
    onColumnMoved(event: ColumnMovedEvent): void {
      console.log(event);
    },
    domLayout: 'autoHeight',
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: gridWidth }}>
      <input type={'number'} value={gridWidth} onChange={ev => setGridWidth(ev.target.value)} />
      <button onClick={() => addData()}>add Data</button>
      <AgGridReact onGridReady={onGridReady} gridOptions={gridOption} rowData={rowData}>
        {/*<AgGridColumn*/}
        {/*  field="make"*/}
        {/*  cellEditor={'ConsumptionCell'}*/}
        {/*  cellRenderer={'ConsumptionCell'}*/}
        {/*  width={300}*/}
        {/*/>*/}
        {/*<AgGridColumn field="model" filter={true} />*/}
        {/*<AgGridColumn field="price" checkboxSelection={true} />*/}
      </AgGridReact>
    </div>
  );
};

export default App;
