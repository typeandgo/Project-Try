import React, { memo } from 'react';
import Layout from 'components/Layout';
import GoogleMapReact from 'google-map-react';
import styles from './Maps2.module.scss';
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_MAP_ID } from 'constants/index';

const Maps2 = () => {
  const centerLocation = {
    lat: -3.745,
    lng: -38.523
  };
  
  return (
    <Layout>
      Maps page
      <div className={ styles.mapContainer } id='map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
          defaultCenter={centerLocation}
          defaultZoom={11}
          options={{
            mapId: GOOGLE_MAPS_MAP_ID,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false
          }}
          
        >
          <div>Test</div>
        </GoogleMapReact>
      </div>
    </Layout>
  );
};

export default memo(Maps2);