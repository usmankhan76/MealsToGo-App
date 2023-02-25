import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import CompactRestaurantInfoComp from '../restaurant/compact-restaurant-info-comp'
import { Spacer } from '../spacer/spacer-comp'
import {Text} from '../typography/text-comp'
const BarContainer=styled.View`
    padding:10px;
    margin-left:7px;`

const FavouritesBarComp = ({favouritesList,navigation}) => {
  return (
    <BarContainer>
        <Spacer positon='left' size='large' >
            <Text variant='caption'>Favourites</Text>
        </Spacer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
       {favouritesList.length>0 ?favouritesList.map((restu)=>{
           return(
               <Spacer key={restu.name} position='left' size='medium'>
                <TouchableOpacity 
                    onPress={()=>navigation.navigate("ResturantDetail",{item:restu})}>
                        <CompactRestaurantInfoComp restaurant={restu}/>    
                </TouchableOpacity>
            </Spacer>)
       }):<Text variant='success'>No Favourites Items yet</Text>}
       </ScrollView>
    </BarContainer>
  )
}

export default FavouritesBarComp