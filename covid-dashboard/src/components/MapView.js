/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import {
  TileLayer, Marker, Popup, MapContainer as LeafletMap,
} from 'react-leaflet';
import { divIcon } from 'leaflet';
import axios from '../axios';
import './Map.css';

const icons = {
  xxSmall: divIcon({ className: 'marker-icon pink', iconSize: [12, 12] }),
  xSmall: divIcon({ className: 'marker-icon pink', iconSize: [16, 16] }),
  small: divIcon({ className: 'marker-icon pink', iconSize: [24, 24] }),
  normal: divIcon({ className: 'marker-icon purple', iconSize: [32, 32] }),
  large: divIcon({ className: 'marker-icon purple', iconSize: [48, 48] }),
  xLarge: divIcon({ className: 'marker-icon red', iconSize: [72, 72] }),
  xxLarge: divIcon({ className: 'marker-icon red', iconSize: [96, 96] }),
};

function MapView() {
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

  const markerElements = locationArray && locationArray.map((location) => {
    const {
      // eslint-disable-next-line camelcase
      id, country_code,
      country, province,
      coordinates: { latitude, longitude },
      latest: { confirmed },
    } = location;

    let markerIcon = icons.xxSmall;
    if (confirmed >= 101 && confirmed <= 500) {
      markerIcon = icons.xSmall;
    } else if (confirmed >= 501 && confirmed <= 1000) {
      markerIcon = icons.small;
    } else if (confirmed >= 1001 && confirmed <= 5000) {
      markerIcon = icons.normal;
    } else if (confirmed >= 5001 && confirmed <= 10000) {
      markerIcon = icons.large;
    } else if (confirmed >= 10001 && confirmed <= 50000) {
      markerIcon = icons.xLarge;
    } else if (confirmed >= 50001) {
      markerIcon = icons.xxLarge;
    }

    let title = country;
    if (province !== '' && province !== country) {
      title = `${province}, ${country}`;
    }

    return (
            <Marker
                // eslint-disable-next-line camelcase
                key={`${id}-${country_code}`}
                position={[latitude, longitude]}
                icon={markerIcon}
                onclick={() => onSelectMarker(id)} >
                <Popup>{title}</Popup>
            </Marker>
    );
  });

  return (
    <div className='map'>
<LeafletMap center={[51.505, -0.09]}
        zoom={6}>
<TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
    {markerElements}
</LeafletMap>
    </div>
  );
}
export default MapView;
