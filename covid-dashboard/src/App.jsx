import './App.css';
import React, { useState } from 'react';
import Table1 from './table1.jsx';
import Table1p2 from './table1p2.jsx';
import useFetch from './getInfo.jsx';
import {
  filterInfo,
  periodInfo,
  statusInfo,
} from './table1Info';
import findCountryInfo from './findCountryInfo';

function App() {
  const info = useFetch('https://api.covid19api.com/summary');
  const [countryData, setCountry] = useState('Belarus');

  const filterData = (period, status) => filterInfo(info, period, status);
  const findCountry = (country) => {
    setCountry(country);
  };

  return (
    <div className="App">
      <header className="App-header">
        COVID-19 Dashboard
      </header>
      {info && <Table1
        filterData={filterData}
        info={filterInfo(info, 0, 0)}
        periodInfo={periodInfo}
        findCountry={findCountry}
        statusInfo={statusInfo}
      />}
      {info && <Table1p2 info={findCountryInfo(info, countryData)} />}
    </div>
  );
}

export default App;
