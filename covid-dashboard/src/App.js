import './App.css';
import React, { useState } from 'react';
import { Table1 } from './table1';
import { useFetch } from './getInfo';
import { periodInfo, statusInfo } from './deathsInfo';
import { filterInfo } from './deathsInfo';

function App() {
  let info = useFetch('https://api.covid19api.com/summary')

  const [visibleData, setVisibleData] = useState('')

  let updateData = (period, status) => {
     let data =filterInfo(info, period, status)
     setVisibleData(data)
  }
  setVisibleData(updateData(0, 0))

  return (
    <div className="App">
      <header className="App-header">
        COVID-19 Dashboard
      </header>
      <Table1 updateData={updateData} info={visibleData} periodInfo={periodInfo} statusInfo={statusInfo} />
    </div>
  );
}

export default App;


