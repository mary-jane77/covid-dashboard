import React, { useState, useEffect, useCallback } from 'react';
import MapView from './components/Map/MapView';
import 'leaflet/dist/leaflet.css';
import './CSS/App.scss';
import axios from './axios';
import Summary from './components/Summary.jsx';
import DetailsView from './components/Map/DetailsView.jsx';
import './components/Map.css';

function App() {
  const [locationArray, setLocationArray] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]);
  const [loading, setLoading] = useState(false);

  function sortedLocationArray(locations) {
    // eslint-disable-next-line max-len
    return [...locations].sort((location1, location2) => location2.latest.confirmed - location1.latest.confirmed);
  }
  const onSelectLocation = useCallback((id) => {
    const location = locationArray.find((_location) => _location.id === id);
    if (location === undefined) {
      setSelectedLocation(null);
      return;
    }
    setSelectedLocation(location);
    const { coordinates: { latitude, longitude } } = location;
    setMapCenter([latitude, longitude]);
  }, [locationArray]);

  const onDeselectLocation = useCallback(() => {
    setSelectedLocation(null);
  }, []);

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

  let detailsView = null;
  if (selectedLocation != null) {
    detailsView = <DetailsView location={selectedLocation} onClickClose={onDeselectLocation} />;
  }
  return (

    <div className="App">

    <div className="app__left">

    <div className="app__header">
    <h1>COVID-19 Dashboard by the Center for Systems Science and Engineering
        (CSSE) at Johns Hopkins University (JHU)</h1>
   </div>

          <Summary
        locationArray={locationArray}
        selectedLocation={selectedLocation}
        onSelectItem={onSelectLocation}
        onDeselectItem={onDeselectLocation}
          />

    <div className='cards_map'>
       <MapView
      locationArray={locationArray}
      mapCenter={mapCenter}
      onSelectMarker={onSelectLocation} />
      {detailsView}
    </div>

       </div>
 </div>

  );
}

export default App;
