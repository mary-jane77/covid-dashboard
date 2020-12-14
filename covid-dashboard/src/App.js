import React from 'react';
import './App.css';
import axios from './axios';
import Summary from './components/Summary';

function App() {
  const [totalConfirmed, setTotalConfirmed] = React.useState(0);
  const [totalRecovered, setTotalRecovered] = React.useState(0);
  const [totalDeaths, setTotalDeaths] = React.useState(0);
  const [covidSummary, setCovidSummary] = React.useState({});
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
      <Summary
     totalConfirmed={totalConfirmed}
     totalRecovered={totalRecovered}
     totalDeaths={totalDeaths}
     covidSummary={covidSummary}
     country={''}
/>
     <div>
           {covidSummary.Countries && covidSummary.Countries.map((country) => (
        // eslint-disable-next-line react/jsx-key
        <tr>
          <td>{country.Country}</td>
          <td>
             <td>{country.TotalConfirmed}</td>
          </td>
        </tr>
           ))}
     </div>

 </div>
  );
}

export default App;
