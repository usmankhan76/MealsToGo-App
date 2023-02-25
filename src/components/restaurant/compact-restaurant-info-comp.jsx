import React from 'react'
import { Image, Platform, View } from 'react-native'
import WebView from 'react-native-webview';
import styled from 'styled-components';
import { Text } from '../typography/text-comp';


const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;
const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const CompactWebImage = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const isAndorid=Platform.OS==='android'

const CompactRestaurantInfoComp = ({restaurant,isMap}) => {
    const Image=(isAndorid && isMap )?CompactWebImage:CompactImage
  return (
    <Item>
        <Image source={{uri:restaurant.photos[0]}}/>
        <Text center variant="caption" numberOfLines={3}>{restaurant.name}</Text>
    </Item>
  )
}

export default CompactRestaurantInfoComp