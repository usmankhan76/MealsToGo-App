import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import styled from 'styled-components'
import DetailListComp from '../../../components/Detail-List/detail-list-comp'
import { Spacer } from '../../../components/spacer/spacer-comp'
import { SafeArea } from '../../../components/utility/safe-area-component'
import ResturantsInfoCardComp from '../components/resturants-info-card-comp'

const SearchContainer= styled.View`
  padding:${(prop)=>prop.theme.space[2]};
  flex:1;
`
const ReturantsDetailScreen = ({route}) => {
    const {item}=route.params
    
  return (
    <SafeArea>
        <SearchContainer>

        <ResturantsInfoCardComp resturant={item} />
        <DetailListComp/>
        

        
        </SearchContainer>
    </SafeArea>
  )
}

export default ReturantsDetailScreen