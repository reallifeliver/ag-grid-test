import React, {useEffect, useState} from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {GridApi, GridOptions} from "ag-grid-community";
import Consumption from "components/Consumption";
import ConsumptionCell from "components/ConsumptionCell";


const App = () => {

  const [gridApi, setGridApi] = useState<GridApi>();
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const onGridReady = (params: any) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    const httpRequest = new XMLHttpRequest();
    const updateData = (data : any) => {
      setRowData(data);
    };

    httpRequest.open(
      'GET',
      'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'
    );
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        updateData(JSON.parse(httpRequest.responseText));
      }
    };
  };

  useEffect(() => {
    gridApi?.sizeColumnsToFit();
  }, [gridApi])


  const [rowData, setRowData] = useState([
    {make: {width:1, length:1}, model: "Celica", price: 35000},
    {make: {width:1, length:1}, model: "Mondeo", price: 32000},
    {make:  {width:1, length:1}, model: "Boxter", price: 72000}
  ]);

  const onChangeCell = (ev: any) => { // FIXME type이 뭐야?
    console.log(ev)
    console.log(ev.newValue, ev.oldValue, ev.node.rowIndex)
  }

  const gridOption: GridOptions = {
    rowData,
    columnDefs: [
      { headerName: 'Make', field: 'make', width: 400, editable: true, onCellValueChanged: onChangeCell, onCellClicked: () => {}, onCellContextMenu: () => {}, onCellDoubleClicked: () => {} },
      { headerName: 'Model', field: 'model'},
      { headerName: 'Price', field: 'price'},
    ],
    defaultColDef : { // 컬럼간에 기본 속성을 정의할 수 있다. 컬럼 properties는 여기에 https://www.ag-grid.com/javascript-grid-column-properties/
      editable: true,
      filter: 'agTextColumnFilter'
    },
    columnTypes: { // 컬럼 타입을 정의할 수있다.
      'testType': {
        editable: false
      }
    },
    frameworkComponents: {
      ConsumptionCell: ConsumptionCell
    }
  }

  return (
    <div className="ag-theme-alpine" style={ { height: 400, width: 1200 } }>
      <AgGridReact
        onGridReady={onGridReady}
        gridOptions={gridOption}
        >
        <AgGridColumn field="make" cellEditor={'ConsumptionCell'} cellRenderer={'ConsumptionCell'} width={300}/>
        <AgGridColumn field="model" filter={true}/>
        <AgGridColumn field="price" checkboxSelection={true}  />
      </AgGridReact>
      <ConsumptionCell value={{width: 10, length: 10}} selectedLengthUnit={'yd'} selectedWidthUnit={'yd'} />
    </div>
  );
};

export default App;