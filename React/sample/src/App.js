import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React, { useCallback, useState, useReducer, useMemo, useEffect } from 'react';
import './App.css';
import Grid from "./components/Grid"
import { customers } from "./data"
import reducer from './logic/reducer'
import initState from './logic/initState'
import gridEnum from './gridEnum'
import { GroupOperationDescriptions } from 'devextreme-react/data-grid';


function App() {
  // const [{one, two}, dispatch] = useReducer(reducer, initState)
  const [state, dispatch] = useReducer(reducer, initState)
  // let syncedOpts;

  // syncedOpts = useMemo(() => {

  // }, [])

  // const syncedOpts = useMemo(() => {
  //   let opts = {
  //     [gridEnum.one]: {
  //       selectedRowKeys: state[gridEnum.one].selectedRowKeys,
  //       handleSelectedRowKeysChange: (keys) => dispatch({type: "selectedRowKeys", value: keys, grid: gridEnum.one})
  //     },
  //     [gridEnum.two]: {
  //       selectedRowKeys: state[gridEnum.one].selectedRowKeys,
  //       handleSelectedRowKeysChange: (keys) => dispatch({type: "selectedRowKeys", value: keys, grid: gridEnum.two})
  //     }
  //   }
  //   return opts;
  // },[state])

  const getSyncedGridOptions = useCallback((grid) => {
    return {
      selectedRowKeys: state[grid].selectedRowKeys,
      pageSize: state[grid].pageSize,
      pageIndex: state[grid].pageIndex,
      handleSelectedRowKeysChange: (keys) => dispatch({type: "selectedRowKeys", value: keys, grid})
    }
  }, [state])

  return (
    <div className="App">
      <div className="tables">
        <div className="column">
          <Grid dataSource={customers} 
            syncedOpts={getSyncedGridOptions(gridEnum.one)}
            // selectedRowKeys={one.selectedRowKeys}
            // pageSize={one.pageSize}
            // handleSelectedRowKeysChange={keys => dispatch({type: "selectedRowKeys", value: keys, grid: gridEnum.one})}
            // handlePageSizeChange={pageSize => dispatch({type: "pageSize", value: pageSize, grid: gridEnum.one})}
            // handlePageIndexChange={pageIndex => dispatch({type: "pageSize", value: pageIndex, grid: gridEnum.one})}
          />
        </div>
        <div className="column">
          <Grid dataSource={customers} 
            syncedOpts={getSyncedGridOptions(gridEnum.two)}
            // selectedRowKeys={two.selectedRowKeys}
            // pageSize={two.pageSize}
            // handleSelectedRowKeysChange={(keys) => dispatch({type: "selectedRowKeys", value: keys, grid: gridEnum.two})}
            // handlePageSizeChange={pageSize => dispatch({type: "pageSize", value: pageSize, grid: gridEnum.two})}
            // handlePageIndexChange={pageIndex => dispatch({type: "pageSize", value: pageIndex, grid: gridEnum.two})}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
