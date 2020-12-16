import React from 'react';
import numeral from 'numeral';
import axios from '../axios';

export default function Country() {
  const [covidSummary, setCovidSummary] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    axios.get('/summary')
      .then((res) => {
        setLoading(false);

        if (res.status === 200) {
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
  <div>
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
  </div>
  );
}
