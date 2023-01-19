import React, { useState } from 'react'
import { Searchbar } from "react-native-paper";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
} from "react-native";
import ResturantsInfoCardComp from '../components/resturants-info-card-comp';
import styled from 'styled-components/native';

const SafeArea=styled(SafeAreaView)`
  flex:1;
  marginTop:${StatusBar.currentHeight}px; 
`
const SearchContainer=styled.View`
  padding:${(prop)=>prop.theme.space[3]};
`
const ResturantInfoCardListContainer=styled.View`
  flex:1;
  padding:${(prop)=>prop.theme.space[3]};
  
`
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

        <ResturantInfoCardListContainer>
          <ResturantsInfoCardComp/>
        </ResturantInfoCardListContainer>
      </SafeArea>
  )
}