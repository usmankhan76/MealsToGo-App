import React, { useState } from 'react'
import { Searchbar } from "react-native-paper";
import {
  FlatList
} from "react-native";
import ResturantsInfoCardComp from '../components/resturants-info-card-comp';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/spacer-comp';
import { SafeArea } from '../../../components/utility/safe-area-component';


const SearchContainer=styled.View`
  padding:${(prop)=>prop.theme.space[3]};
`
const ResturantCardList= styled(FlatList).attrs({
  contentContainerStyle:{padding:16}})``;
// .attrs is called function methods .attributes and this attribute give access us to props of Flatlist

export const ResturantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };
  return (
      <SafeArea >
        <SearchContainer>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </SearchContainer>
        <ResturantCardList
          data={[{name:1},{name:2},{name:3},{name:4},{name:5},{name:6}]}
          renderItem={()=><Spacer position="bottom" size="large">
              <ResturantsInfoCardComp/>
            </Spacer>}
          keyExtractor={item=>item.name}
          />
          
        
      </SafeArea>
  )
}