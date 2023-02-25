import React, { useContext } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FavouritesContext } from '../../services/favourites/favourites-context';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

const HeartButton=styled(TouchableOpacity)`
    position:absolute;
    top:10px;
    right:10px;
    z-index:9
    `
export const FavouritesComp = ({restaurant}) => {
    const {favouritesList,addToFavourite,removeFromFavourite}=useContext(FavouritesContext)    
    const isFavourite=favouritesList.find((item)=>item.placeId===restaurant.placeId)
  return (
    <HeartButton
        onPress={()=>!isFavourite?addToFavourite(restaurant):removeFromFavourite(restaurant)}>
        <AntDesign size={24} name={isFavourite?'heart':'hearto'} color={isFavourite?'red':'white'} />
    </HeartButton>
  )
}
