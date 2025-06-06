import React from 'react'
import * as apiClient from '../api-client'
import { useQuery } from 'react-query'

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
const API_KEY=import.meta.env.VITE_API_G_P 

const containerStyle = {
  width:' 900px',
  height: '400px',
}




function MyComponent() {
   const { data: stations } = useQuery("fetchQuery", () =>
      apiClient.fetchStations()
    );

    const points=stations?.map((station) => ({
      lat: station.location.latitude,
      lng: station.location.longitude
    })) || [];
    console.log("points", points);
    const center=points[5];

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:API_KEY,
  })

  const [map, setMap] = React.useState<any>(null)

  const onLoad = React.useCallback(function callback(map:any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map:any) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */

       
        
      
      // <Marker position={center}></Marker>
      points.map((point, index) => (
        <Marker key={index} position={point} />
      ))}
      
    </GoogleMap>
  ) : (
    <></>
  )
}

export default MyComponent;