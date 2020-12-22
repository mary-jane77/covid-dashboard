/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import './Css/App.scss';
import './App.css';
import axios from './axios';
import Table1 from './table1.jsx';
import Table1p2 from './table1p2.jsx';
import useFetch from './getInfo.jsx';
import Summary from './components/Summary.jsx';

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

  const [locationArray, setLocationArray] = useState([]);
  const [loading, setLoading] = useState(false);

  function sortedLocationArray(locations) {
    // eslint-disable-next-line max-len
    return [...locations].sort((location1, location2) => location2.latest.confirmed - location1.latest.confirmed);
  }
  useEffect(() => {
    setLoading(true);
    axios.get('/v2/locations').then((res) => {
      const sortedLocations = sortedLocationArray(res.data.locations);
      setLoading(false);

      if (res.status === 200) {
        setLocationArray(sortedLocations);
      }
    })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(locationArray);

  return (
    <div className="App">
      <header className="App-header">
        <h1>COVID-19 Dashboard</h1>
      </header>
      {info && <Table1
        filterData={filterData}
        info={filterInfo(info, 0, 0)}
        periodInfo={periodInfo}
        findCountry={findCountry}
        statusInfo={statusInfo}
      />}
      {info && <Table1p2 info={findCountryInfo(info, countryData)} />}

      <Summary
     locationArray={locationArray}
     loading={loading} />

    </div>
  );
}
export default App;
