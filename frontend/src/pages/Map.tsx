import React from 'react'
import * as apiClient from '../api-client'
import { useQuery } from 'react-query'

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
const API_KEY=import.meta.env.VITE_API_G_P 


const containerStyle = {
  width: '100%',
  height: 'clamp(300px, 70vh, 500px)',
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
  

  const onLoad = React.useCallback(function callback(map: any) {
    // Fit all station markers within bounds
    if (points && points.length > 0) {
      const bounds = new window.google.maps.LatLngBounds()
      points.forEach(point => {
        bounds.extend(point)
      })
      map.fitBounds(bounds, 50) // 50px padding around markers
    }
    setMap(map)
  }, [points])

  const onUnmount = React.useCallback(function callback() {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div className='w-full '>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */

       
        
      
      // <Marker position={center}></Marker>
      points.map((point, index) => (
        <Marker key={index} position={point} />
      ))}
      
    </GoogleMap>
    </div>
  ) : (
    <></>
    
  )
}

export default MyComponent;