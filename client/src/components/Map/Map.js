import React, { useEffect, useRef } from 'react';
 
const Map = () => {
  const googleMapRef = useRef(null);
  let googleMap = null;
 
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    googleMap = initGoogleMap();
    createMarker();
  }, []);
 
 
  // initialize the google map
  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: 39.9322222, lng: -105.1333333 },
      zoom: 14
    });
  }
 
  // create marker on google map
  const createMarker = () => new window.google.maps.Marker({
    position: { lat: 39.9322222, lng: -105.1333333 },
    map: googleMap
  });
 
  return <div
    ref={googleMapRef}
    style={{ width: 450, height: 350 }}
  />
}
 
export default Map;