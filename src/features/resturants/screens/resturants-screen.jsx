import React, { useContext, useState } from 'react'
import { ActivityIndicator, Searchbar ,Colors} from "react-native-paper";
import {
  FlatList, Pressable, Text
} from "react-native";
import ResturantsInfoCardComp from '../components/resturants-info-card-comp';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/spacer-comp';
import { SafeArea } from '../../../components/utility/safe-area-component';
import { resturantsRequest } from '../../../services/resturants/resturants-services';
import { ResturantContext } from '../../../services/resturants/resturants-context';
import { LocationContext } from '../../../services/location/location-context';
import Search from '../components/search-comp';
import FavouritesBarComp from '../../../components/favourites/favourites-bar-comp';
import { FavouritesContext } from '../../../services/favourites/favourites-context';



const LoadingContainer= styled.View`
  position:absolute;
  top:50%;
  left:40%
`
const ResturantCardList= styled(FlatList).attrs({
  contentContainerStyle:{padding:16}})``;
// .attrs is called function methods .attributes and this attribute give access us to props of Flatlist

export const ResturantsScreen = ({navigation}) => {
  
  const {resturants,isLoading,error}=useContext(ResturantContext)
  const {favouritesList}=useContext(FavouritesContext)    

  // console.log("This is the resturants",resturants)
  const [isFavouritesToggle,setisFavouritesToggle]=useState(false);
  return (
      <SafeArea >
        <Search 
          isFavouritesToggle={isFavouritesToggle} 
          onFavouritesToggle={()=>setisFavouritesToggle(!isFavouritesToggle)} />

        {isFavouritesToggle && (
          <FavouritesBarComp 
            favouritesList={favouritesList} 
            navigation={navigation}
            // onNavigate={navigation.navigate}
            />)}

        {isLoading ? 
         <LoadingContainer >
            <ActivityIndicator  animating="true" color='blue' size={'large'}/>
         </LoadingContainer> :
        <ResturantCardList
          // data={[{name:1},{name:2},{name:3},{name:4},{name:5},{name:6}]}
          data={resturants}
          renderItem={({item})=>{
            return(
              <Pressable onPress={()=>navigation.navigate("ResturantDetail",{item})}>
                {/* we can also change Pressabel to TouchableOpacity */}
                <Spacer position='bottom' size='large'>
                  <ResturantsInfoCardComp resturant={item}/>
                </Spacer>
              </Pressable> 
            )}
            }
          keyExtractor={item=>item.name}
          />
        }
          
        
      </SafeArea>
  )
}