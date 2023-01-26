import { Card} from 'react-native-paper'
import styled from 'styled-components/native'


export const ResturantCard=styled(Card)`
  backgroundColor:${(props)=>props.theme.colors.bg.primary};
  // margin-bottom:20px
  `

export const Address=styled.Text`
  font-family: ${(props)=>props.theme.fonts.body};
  font-size:${(props)=>props.theme.fontSizes.caption}
`
export const Info=styled.View`
  padding:${(props)=>props.theme.space[3]};
`
export const StarsContainer=styled.View`
  display:flex;
  flex-direction:row;
  // padding-top:${(props)=>props.theme.space[2]};
  // padding-bottom:${(props)=>props.theme.space[2]};
`
export const StarsAndOpenContainer=styled.View`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  padding-top:${(props)=>props.theme.space[2]};
  padding-bottom:${(props)=>props.theme.space[2]};
`
export const Icon=styled.Image`
  height:15px;
  width:15px;
`