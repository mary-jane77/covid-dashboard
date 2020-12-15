/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import React from 'react';
import { MapContainer as LeafletMap, TileLayer } from 'react-leaflet';
import './Map.css';

function Map() {
  return (
    <div className='map'>
<LeafletMap center={[50, 10]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}>
<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />

</LeafletMap>
    </div>
  );
}
export default Map;
