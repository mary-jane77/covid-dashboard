import './App.css';
import './Css/App.scss';
import React, { useState } from 'react';
import Table1 from './table1.jsx';
import Table1p2 from './table1p2.jsx';
import useFetch from './getInfo.jsx';
import Summary from './components/Summary.jsx';
import 'leaflet/dist/leaflet.css';

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
        <h1>COVID-19 Dashboard by the Center for Systems Science and Engineering
(CSSE) at Johns Hopkins University (JHU)</h1>
      </header>
      {info && <Table1
        filterData={filterData}
        info={filterInfo(info, 0, 0)}
        periodInfo={periodInfo}
        findCountry={findCountry}
        statusInfo={statusInfo}
      />}
      {info && <Table1p2 info={findCountryInfo(info, countryData)} />}

      <Summary />

    </div>
  );
}
export default App;
