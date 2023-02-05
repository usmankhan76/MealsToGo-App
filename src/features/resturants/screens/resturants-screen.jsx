import React, { useContext, useState } from 'react'
import { ActivityIndicator, Searchbar ,Colors} from "react-native-paper";
import {
  FlatList, Text
} from "react-native";
import ResturantsInfoCardComp from '../components/resturants-info-card-comp';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/spacer-comp';
import { SafeArea } from '../../../components/utility/safe-area-component';
import { resturantsRequest } from '../../../services/resturants/resturants-services';
import { ResturantContext } from '../../../services/resturants/resturants-context';


const SearchContainer=styled.View`
  padding:${(prop)=>prop.theme.space[3]};
`
const LoadingContainer= styled.View`
  position:absolute;
  top:50%;
  left:40%
`
const ResturantCardList= styled(FlatList).attrs({
  contentContainerStyle:{padding:16}})``;
// .attrs is called function methods .attributes and this attribute give access us to props of Flatlist

export const ResturantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => { 
    setSearchQuery(query);
  };
  const {resturants,isLoading,error}=useContext(ResturantContext)
  // console.log("This is the resturants",resturants)
  return (
      <SafeArea >
        <SearchContainer>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </SearchContainer>
        {isLoading? 
         <LoadingContainer >
          <ActivityIndicator  animating="true" color='blue' size={'large'}/>
         </LoadingContainer> :
        <ResturantCardList
          // data={[{name:1},{name:2},{name:3},{name:4},{name:5},{name:6}]}
          data={resturants}
          renderItem={({item})=><Spacer position='bottom' size='large'>
              <ResturantsInfoCardComp resturant={item}/>
            </Spacer>}
          keyExtractor={item=>item.name}
          />
        }
          
        
      </SafeArea>
  )
}