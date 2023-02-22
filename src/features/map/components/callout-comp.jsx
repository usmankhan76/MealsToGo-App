import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import CompactRestaurantInfoComp from '../../../components/restaurant/compact-restaurant-info-comp'

const CalloutComp = ({restaurant}) => {
  return (
   <CompactRestaurantInfoComp restaurant={restaurant}/>
  )
}

export default CalloutComp