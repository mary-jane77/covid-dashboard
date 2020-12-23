/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import './App.scss';
import Table1 from './components/table1.jsx';
import Table1p2 from './components/table1p2.jsx';
import useFetch from './components/getInfo.jsx';
import './Css/App.scss';
import './App.css';
import axios from './axios';
import Summary from './components/Summary.jsx';

import {
  filterInfo,
  periodInfo,
  statusInfo,
} from './js/table1Info';
import findCountryInfo from './js/findCountryInfo';
import Chart4 from './components/chart4.jsx';
import { getWorldChartInfo, getCountryChartInfo, dtimeNums } from './js/getChartInfo';
import Footer from './components/footer.jsx';

function App() {
  const info = useFetch('https://api.covid19api.com/summary');
  const [status, setStatusInfo] = useState(0);
  const [period, setPeriodInfo] = useState(0);
  const [numeration, setNumeration] = useState(0);
  const [countryData, setCountry] = useState('Belarus');
  const [chartCountry, setChartCountry] = useState('World');
  const [displayingCountryData, setdisplayingCountryData] = useState(false);
  const OneCountryChartInfo = useFetch(`https://api.covid19api.com/dayone/country/${countryData}`);
  const WorldChartInfo = useFetch(`https://api.covid19api.com/world?from=2020-03-01T00:00:00Z&to=${dtimeNums(-1)}T00:00:00Z`);
  const population = useFetch(`https://restcountries.eu/rest/v2/name/${countryData}`);

  const changeConditionfromTable = (p, s) => {
    setPeriodInfo(p);
    setStatusInfo(s);
  };
  const changeCondition = (p, s, n) => {
    setPeriodInfo(p);
    setStatusInfo(s);
    setNumeration(n);
  };

  const filterChartData = () => {
    if (displayingCountryData) {
      return getCountryChartInfo(OneCountryChartInfo,
        period,
        status,
        numeration,
        population[0].population);
    }
    return getWorldChartInfo(WorldChartInfo, period, status, numeration);
  };
  const filterData = () => filterInfo(info, period, status);
  const findCountry = (country) => {
    setCountry(country);
    setChartCountry(country);
    setdisplayingCountryData(true);
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
      {(info && WorldChartInfo) && <Table1
        changeCondition={changeConditionfromTable}
        filterData={filterData}
        filterChartData={filterChartData(periodInfo)}
        info={filterData()}
        periodInfo={periodInfo}
        findCountry={findCountry}
        statusInfo={statusInfo}
        status={status}
        period={period}
      />}
      {(info && population) && <Table1p2 info={findCountryInfo(info, countryData)}
        population={population[0].population} />}
      {(info && WorldChartInfo) && <Chart4
        changeCondition={changeCondition}
        info={filterChartData()}
        country={chartCountry}
        statusInfo={statusInfo}
        periodInfo={periodInfo}
        status={status}
        period={period}
        numeration={numeration}
      />}
      <Footer/>

      <Summary
     locationArray={locationArray}
     loading={loading} />

    </div>
  );
}
export default App;
