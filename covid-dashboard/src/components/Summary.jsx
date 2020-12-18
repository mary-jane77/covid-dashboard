import React, { useState, useEffect } from 'react';
import axios from '../axios';

const totalKeyArray = ['confirmed'];

function Summary() {
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

  if (loading) {
    return <p> Fetching!!! </p>;
  }

  const totalElements = totalKeyArray.map((key) => {
    // eslint-disable-next-line no-shadow
    const sum = locationArray.reduce((sum, location) => sum + location.latest[key], 0);
    return (
            <div key={key} className="columns">
                <div className="column">
                    <h6 className="title is-6">{key}</h6>
                </div>
                <div className="column">
                    <p className="is-6 has-text-right">{sum}</p>
                </div>
            </div>
    );
  });

  const locationElements = locationArray.map((location) => {
    const {
      // eslint-disable-next-line camelcase
      id, country_code,
      country, province,
      latest: { confirmed },
    } = location;

    let title = country;
    if (province !== '' && province !== country) {
      title = `${province}, ${country}`;
    }

    return (
            // eslint-disable-next-line camelcase
            <div key={`${id}-${country_code}`} >
                <div className="columns">
                    <div className="column">
                        <h6 className="title is-7">{title}</h6>
                    </div>
                    <div className="column">
                        <p className="country-total">{confirmed}</p>
                    </div>
                </div>
            </div>
    );
  });

  return (
   <div className="list-view">
          <div className="list-view-total">
              <h2 className="title is-4">Clobal Cases</h2>
              {totalElements}
          </div>
          <div className="list-view-locations">
           {locationElements}
          </div>
      </div>
  );
}

export default Summary;
