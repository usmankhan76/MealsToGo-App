import React, { useContext, useEffect, useState } from 'react'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components'
import { LocationContext } from '../../../services/location/location-context'

const SearchContainer= styled.View`
  padding:${(prop)=>prop.theme.space[3]};
`
const Search = () => {
    const {isLoadinglocation,locationError,location,keyword,onSearch}=useContext(LocationContext)
    const [searchQuery, setSearchQuery] = useState(keyword);
    const onChangeSearch = (query) => { 
    setSearchQuery(query)
    
  };

  return (
        <SearchContainer>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            loading={isLoadinglocation}
            onSubmitEditing={()=>onSearch(searchQuery)}
            onIconPress={()=>onSearch(searchQuery)}
          />
        </SearchContainer>
  )
}

export default Search