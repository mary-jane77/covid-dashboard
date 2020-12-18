import React from 'react';
import './CSS/App.scss';
import Summary from './components/Summary.jsx';
import MapView from './components/MapView';
import 'leaflet/dist/leaflet.css';

function App() {
  return (

    <div className="App">

    <div className="app__left">

    <div className="app__header">
    <h1>COVID-19 Dashboard by the Center for Systems Science and Engineering
        (CSSE) at Johns Hopkins University (JHU)</h1>
   </div>

          <Summary />

    <div className='cards_map'>
       <MapView />
    </div>

       </div>
 </div>

  );
}
export default App;
