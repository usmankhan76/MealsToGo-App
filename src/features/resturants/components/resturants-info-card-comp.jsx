import React from 'react'
import open from '../../../../assets/open'
import star from '../../../../assets/star'
import {  SvgXml } from 'react-native-svg'
import { Card} from 'react-native-paper'
import { Text } from '../../../components/typography/text-comp'
import { 
  Address, 
  Icon, 
  Info, 
  ResturantCard, 
  StarsAndOpenContainer, 
  StarsContainer
 } from './resturants-info-card-style'

const ResturantsInfoCardComp = ({resturant={}}) => {
    //qw  pass the empty object tor resturant because otherwise it will give us the undefined error
    const {
        name='khan Brand',
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos=["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",],
        address='Canal Road, Faisalabad',
        isOpenNow=true,
        rating=4,
        isClosedNow=true}=resturant
    const starsArray=Array.from(new Array(Math.floor(rating)))// fisst we creat array from rating and use floor method to avoid floating numbers
  return (
    <ResturantCard  elevation={5}>
      <Card.Cover source={{ uri:photos[0]}} />
      <Info>
        <Text variant="label" >{name}</Text>
        <StarsAndOpenContainer>
          <StarsContainer>
            { starsArray.map(()=>(
              <SvgXml key={Math.random().toString()} xml={star} width={20} height={20}/>
              ))}
          </StarsContainer>
          {isClosedNow && (
            <Text variant="error">Closed Temporarily</Text>
          ) }
          {isOpenNow && <SvgXml xml={open} width={20} height={20}/>}
          <Icon  source={{uri:icon}}/>
        </StarsAndOpenContainer>
        <Address >{address}</Address>
      </Info>
    
  </ResturantCard>
  )
}

export default ResturantsInfoCardComp

