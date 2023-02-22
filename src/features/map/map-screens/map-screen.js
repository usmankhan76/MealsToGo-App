import React, { useContext, useEffect, useState } from 'react'
import { Text } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps'
import styled from 'styled-components'
import { LocationContext } from '../../../services/location/location-context'
import { ResturantContext } from '../../../services/resturants/resturants-context'
import CalloutComp from '../components/callout-comp'
import MapSearchComp from '../components/map-search-comp'

const Map=styled(MapView)`
  height:100%;
  width: 100%;
`
const MapScreen = ({navigation}) => {
  const {location}=useContext(LocationContext);
  const {resturants=[]}=useContext(ResturantContext);
  const [delta,setDelta]=useState(0) //delta is acctualy how to zoom in the location

  const{lng,lat,thisIsViewport}=location

  // console.log('its location ',location) // we have need to zoom in on this city location

  // console.log('its location ',resturants)// while we have need to show pin on every restaurant in city

  
  useEffect(()=>{
    const northeastLat=thisIsViewport.northeast.lat;
    const southwestLat=thisIsViewport.southwest.lat;
    setDelta(northeastLat-southwestLat); 

  },[location])
  return (
    <>
    <MapSearchComp/>
    <Map
      region={{
        latitude:lat,
        longitude:lng,
        latitudeDelta:delta,
        longitudeDelta:0.04 // it's the default zoom level
      }}
      >
      {resturants.map((restaurant,index)=>{
        const {lat,lng}=restaurant.geometry.location
        // console.log('this is restaurant single location',location)
         return (
          <Marker key={index} coordinate={{latitude:lat,longitude:lng}} >
            <Callout onPress={()=>navigation.navigate('ResturantDetail',{item:restaurant})}>
              <CalloutComp restaurant={restaurant}/>
            </Callout>
         </Marker>  )      
        })}
    </Map>
    </>
  )
}

export default MapScreen



        // <Marker key={index} coordinate={{latitude:location.lat,longitude:location.lng}} />
