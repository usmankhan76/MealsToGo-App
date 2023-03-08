import React, { useContext } from 'react'
import { FlatList,Pressable, View } from 'react-native'
import styled from 'styled-components';
import { Spacer } from '../../../components/spacer/spacer-comp';
import { Text } from '../../../components/typography/text-comp';
import { SafeArea } from '../../../components/utility/safe-area-component'
import { FavouritesContext } from '../../../services/favourites/favourites-context'
import ResturantsInfoCardComp from '../../resturants/components/resturants-info-card-comp';
import { ResturantCardList } from '../../resturants/components/resturants-list-style';



const FavoritesScreen = ({navigation}) => {
  const {favouritesList}=useContext(FavouritesContext)    
  
//   console.log("fav",favouritesList)
//   const resturants=favouritesList.map((item)=> item)
  return (
    <SafeArea>
    {/* <Text style={{fontSize:30,padding:20}}>Favorites</Text>    */}
        {favouritesList.length>0?(
            <ResturantCardList
          // data={[{name:1},{name:2},{name:3},{name:4},{name:5},{name:6}]}
          data={favouritesList}
          renderItem={({item})=>{
            return(
              <Pressable onPress={()=>navigation.navigate("ResturantDetail",{item})}>
                {/* we can also change Pressabel to TouchableOpacity */}
                <Spacer  position='bottom' size='large'>
                  <ResturantsInfoCardComp resturant={item}/>
                </Spacer>
              </Pressable> 
            )}
            }
          keyExtractor={item=>item.name}
          /> 
        ):<Text variant='success' style={{padding:20}}>No Favourites Items yet</Text>}
        
    </SafeArea>
  )
}

export default FavoritesScreen