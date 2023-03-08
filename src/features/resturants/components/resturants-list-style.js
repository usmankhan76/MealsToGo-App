import { FlatList } from "react-native";
import styled from "styled-components";

export const LoadingContainer= styled.View`
  position:absolute;
  top:50%;
  left:40%
`
export const ResturantCardList= styled(FlatList).attrs({
  contentContainerStyle:{padding:12}})``;
// .attrs is called function methods .attributes and this attribute give access us to props of Flatlist