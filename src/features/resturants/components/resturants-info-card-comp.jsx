import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Card} from 'react-native-paper'
import styled from 'styled-components/native'

const ResturantCard=styled(Card)`
  backgroundColor:${(props)=>props.theme.colors.bg.primary};`

const Title= styled.Text`
  font-family: ${(props)=>props.theme.fonts.body};
  padding:${(props)=>props.theme.space[3]};
  color:${(prop=>prop.theme.colors.ui.success)};`

const ResturantsInfoCardComp = ({resturant={}}) => {
    ///qw  pass the empty object tor resturant because otherwise it will give us the undefined error
    const {
        name='UK Brand',
        photos=["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",],
        addressm='roza oark',
        isOpenNow=true,
        rating=5,
        isClosedNow=false}=resturant
  return (
    <ResturantCard  elevation={5}>
    <Card.Cover source={{ uri:photos[0]}} />
    <Title >{name}</Title>
    
  </ResturantCard>
  )
}

export default ResturantsInfoCardComp

