/* eslint-disable linebreak-style */
import React from 'react';

const totalKeyArray = ['confirmed'];
function Summary(props) {
  const {
    locationArray,
    selectedLocation,
    onSelectItem,
    onDeselectItem,
    loading,
  } = props;

  function onClickItem(id) {
    if (selectedLocation === null) onSelectItem(id);
    else if (selectedLocation.id !== id) onSelectItem(id);
    else onDeselectItem();
  }

  const totalElements = totalKeyArray.map((key) => {
    const sum = locationArray.reduce((total, location) => total + location.latest[key], 0);
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
      id, country_code: countryCode,
      country, province,
      latest: { confirmed },
    } = location;

    let title = country;
    if (province !== '' && province !== country) {
      title = `${province}, ${country}`;
    }
    let locationClass = 'list-view-location';
    if (selectedLocation !== null) {
      if (location.id === selectedLocation.id) {
        locationClass += ' selected';
      }
    }
    let flag = countryCode;
    if (countryCode !== '') {
      flag = <img src={`https://www.countryflags.io/${countryCode}/flat/64.png`} alt='img' onError={(e) => { e.target.onerror = null; e.target.src = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/62/62db5f0a37fc0581a7e2b441098220b89b2379f4_medium.jpg'; }}></img>;
    }

    return (
      <div key={`${id}-${countryCode}`} className={locationClass} onClick={() => onClickItem(id)}>
        <div className="table">
          <tr>
            <td>{flag}</td>
            <td className="title is-7">{title}</td>
            <td>{confirmed}</td>
          </tr>
        </div>
      </div>
    );
  });

  return (
    <div className="list-view">
      {
        loading
          ? <p className='fetch-message'>Fetching!</p>
          : (
            <>
              <div className="list-view-total">
                <h2 className="title is-4">Clobal Cases</h2>
                {totalElements}
              </div>
              <div className="list-view-locations">
                {locationElements}
              </div>
            </>
          )
      }
    </div>
  );
}

export default Summary;
