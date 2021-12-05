import { GoogleApiWrapper, IMapProps, IProvidedProps, Map } from 'google-maps-react';
import React, { useRef } from 'react';
import mapStyle from '../form/MapSearch/mapStyle';

export interface MapViewProps extends IProvidedProps, IMapProps {
  // eslint-disable-next-line no-unused-vars
  onAreaChange?: (areaName: string) => void;
}

/**
 * Displays google maps using custom styles
 */
const MapView: React.FC<MapViewProps> = ({ children, google, onAreaChange, ...mapProps }) => {
  const nav = useRef(new google.maps.Geocoder());

  const handleMove = async (_?: IMapProps, map?: any) => {
    if (onAreaChange) {
      const coords = map.getCenter();
      const area = await nav.current.geocode({ location: coords });
      const areaName = area.results[0].formatted_address;
      onAreaChange(areaName);
    }
  };

  return (
    <Map
      google={google}
      styles={mapStyle}
      scrollwheel
      disableDefaultUI
      {...mapProps}
      onCenterChanged={handleMove}
    >
      {children}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD4ecsun_itWQdd-KVPEuuZjXCKET21mUQ',
})(MapView);
