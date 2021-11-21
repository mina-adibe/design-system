import { GoogleApiWrapper, IMapProps, IProvidedProps, Map } from 'google-maps-react';
import React from 'react';
import mapStyle from '../form/MapSearch/mapStyle';

export interface MapViewProps extends IProvidedProps, IMapProps {}

/**
 * Displays google maps using custom styles
 */
const MapView: React.FC<MapViewProps> = ({ children, google, ...mapProps }) => {
  return (
    <Map google={google} styles={mapStyle} scrollwheel disableDefaultUI {...mapProps}>
      {children}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD4ecsun_itWQdd-KVPEuuZjXCKET21mUQ',
})(MapView);
