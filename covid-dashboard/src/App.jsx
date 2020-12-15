import React from 'react';
import './App.css';
import numeral from 'numeral';
// import ArraySort from 'array-sort';
import { Card, CardContent } from '@material-ui/core';
import axios from './axios';
import Summary from './components/Summary.jsx';
import Map from './components/Map';
import 'leaflet/dist/leaflet.css';

function App() {
  const [totalConfirmed, setTotalConfirmed] = React.useState(0);
  const [totalRecovered, setTotalRecovered] = React.useState(0);
  const [totalDeaths, setTotalDeaths] = React.useState(0);
  const [covidSummary, setCovidSummary] = React.useState({});
  // const [sort, setSort]=React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    axios.get('/summary')
      .then((res) => {
        setLoading(false);

        if (res.status === 200) {
          setTotalConfirmed(res.data.Global.TotalConfirmed);
          setTotalRecovered(res.data.Global.NewRecovered);
          setTotalDeaths(res.data.Global.TotalDeaths);
          setCovidSummary(res.data);
          // setCovidSummary = ArraySort(setCovidSummary, 'TotalConfirmed', { reverse: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return <p> Fetching!!! </p>;
  }

  return (
    <div className="App">
 <div className="app__header">
<h1>COVID-19 Dashboard by the Center for Systems Science and Engineering
(CSSE) at Johns Hopkins University (JHU)</h1>
   </div>
 <div className="app__stats"> <Summary
     totalConfirmed={totalConfirmed}
     totalRecovered={totalRecovered}
     totalDeaths={totalDeaths}
     covidSummary={covidSummary}
     country={''}
/></div>
<Card className="app__right">
      <CardContent>
<div className='table'>
       <h3>Cases by Country/Region/Sovereignty</h3>
           {covidSummary.Countries && covidSummary.Countries.map((country) => (
        // eslint-disable-next-line react/jsx-key
        <tr>
          <td>{country.Country}</td>
       <td>
             <strong>{numeral(country.TotalConfirmed).format(' ')}</strong>
          </td>
        </tr>
           ))}
</div>
        </CardContent>
      </Card>
<Map
           />
 </div>
  );
}

export default App;
