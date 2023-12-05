import React, { useEffect } from 'react';
import './Locations.css';
import { Link, useLocation } from 'react-router-dom';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import addressIco from './assets/address.svg';
import phoneIco from './assets/phone.svg';
import gmapsIco from './assets/gmaps.svg';
import wazeIco from './assets/waze.svg';

const Locations = (props) => {
  const params = useLocation();
  const siteSearch = new URLSearchParams(params.search);
  const requestedLocation = siteSearch.get('site').toLowerCase();

  const locations = {
    'north-hall': {
      name: 'Sede Norte',
      location: [4.70795, -74.061955],
      address: 'Calle 127 No 22 - 15',
      phone: '+57(1)5551234',
      googleMaps: '',
      waze: '',
      isActive: false,
    },
    'south-hall': {
      name: 'Sede Sur',
      location: [4.59949, -74.138907],
      address: ' Calle 80 Sur No 65 - 20',
      phone: '+57(1)5553456',
      googleMaps: '',
      waze: '',
      isActive: false,
    },
    'west-hall': {
      name: 'Sede Occidente',
      location: [4.646733, -74.129121],
      address: 'Centro Comercial El Eden - Av. Boyaca No 12B - 25',
      phone: '+57(1)5557890',
      googleMaps: '',
      waze: '',
      isActive: false,
    },
  };

  useEffect(() => {
    if (requestedLocation === 'north-hall') {
      locations['north-hall'].isActive = true;
      locations['south-hall'].isActive = false;
      locations['west-hall'].isActive = false;
    } else if (requestedLocation === 'south-hall') {
      locations['north-hall'].isActive = false;
      locations['south-hall'].isActive = true;
      locations['west-hall'].isActive = false;
    } else if (requestedLocation === 'west-hall') {
      locations['north-hall'].isActive = false;
      locations['south-hall'].isActive = false;
      locations['west-hall'].isActive = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='page-outer-container'>
      <h1>Nuestras ubicaciones</h1>
      <div className='location-page-container'>
        <section className='location-page-map'>
          <MapContainer
            center={locations[requestedLocation].location}
            zoom={16}
            zoomControl={false}
            scrollWheelZoom={false}
            className='locations-leaflet-map-container'>
            <TileLayer
              attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
            />
            <Marker position={locations[requestedLocation].location} />
          </MapContainer>
        </section>
        <section className='location-page-info'>
          <article>
            <p>{locations[requestedLocation].name}</p>
            <p>
              <img src={addressIco} alt='Icono de dirección' />
              {locations[requestedLocation].address}
            </p>
            <p>
              <img src={phoneIco} alt='Icono de dirección' />
              {locations[requestedLocation].phone}
            </p>
            <div className='location-info-navigation'>
              <span> Ubícanos mediante Google Maps o Waze</span>
              <div>
                <span>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href={`https://www.waze.com/ul?ll=${locations[requestedLocation].location[0]}%2C${locations[requestedLocation].location[1]}&navigate=yes&zoom=17`}>
                    <img src={wazeIco} alt='Icono de dirección' />
                  </a>
                </span>
                <span>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href={`
                    https://www.google.com/maps/dir/?api=1&destination=${locations[requestedLocation].location[0]}%2C${locations[requestedLocation].location[1]}`}>
                    <img src={gmapsIco} alt='Icono de dirección' />
                  </a>
                </span>
              </div>
            </div>
          </article>
          <div className='location-page-info-selector'>
            <Link
              to='/locations?site=north-hall'
              className={`location-page-selector-link ${
                locations[requestedLocation].isActive ? 'selector-active' : ''
              }`}
              reloadDocument>
              Sede Norte
            </Link>
            <Link
              to='/locations?site=south-hall'
              className={`location-page-selector-link ${
                locations[requestedLocation].isActive ? 'selector-active' : ''
              }`}
              reloadDocument>
              Sede Sur
            </Link>
            <Link
              to='/locations?site=west-hall'
              className={`location-page-selector-link ${
                locations[requestedLocation].isActive ? 'selector-active' : ''
              }`}
              reloadDocument>
              Sede Occidente
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Locations;
