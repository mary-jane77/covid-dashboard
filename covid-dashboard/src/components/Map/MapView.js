/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import React from 'react';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';
import { divIcon } from 'leaflet';

const icons = {
  xxSmall: divIcon({ className: 'marker-icon pink', iconSize: [12, 12] }),
  xSmall: divIcon({ className: 'marker-icon pink', iconSize: [16, 16] }),
  small: divIcon({ className: 'marker-icon pink', iconSize: [24, 24] }),
  normal: divIcon({ className: 'marker-icon purple', iconSize: [32, 32] }),
  large: divIcon({ className: 'marker-icon purple', iconSize: [48, 48] }),
  xLarge: divIcon({ className: 'marker-icon red', iconSize: [72, 72] }),
  xxLarge: divIcon({ className: 'marker-icon red', iconSize: [96, 96] }),
};

function MapView(props) {
  const {
    locationArray,
    mapCenter,
    onSelectMarker,
  } = props;

  const markerElements = locationArray.map((location) => {
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
        <Popup>
          {title}
        </Popup>
      </Marker>
    );
  });

  return (
    <div className='map'>
      <Map center={mapCenter}
        zoom={6}>
        <TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png"
        />
        {markerElements}
      </Map>

    </div>
  );
}
export default MapView;
