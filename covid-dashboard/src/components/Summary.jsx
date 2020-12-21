import React from 'react';

const totalKeyArray = ['confirmed'];

function Summary(props) {
  const {
    locationArray,
  } = props;

  // eslint-disable-next-line radix
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
      // eslint-disable-next-line camelcase
      latest: { confirmed },
    } = location;

    let title = country;
    if (province !== '' && province !== country) {
      title = `${province}, ${country}`;
    }

    // eslint-disable-next-line camelcase
    let flag = country_code;
    // eslint-disable-next-line camelcase
    if (country_code !== '') {
      // eslint-disable-next-line camelcase
      flag = <img src={`https://www.countryflags.io/${country_code}/flat/64.png`} alt={country_code}></img>;
    }

    return (
    // eslint-disable-next-line camelcase
            <div key={`${id}-${country_code}`} >
                <div className="columns">
                    <div className="column">
                      <p className='flag'>{flag}</p>
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
