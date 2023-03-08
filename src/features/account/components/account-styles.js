import { Button, TextInput } from "react-native-paper";
import styled from "styled-components";
import { Text } from "../../../components/typography/text-comp";
import { colors } from "../../../infrastructure/theme/colors";

export const BackgroundImage=styled.ImageBackground`
    flex:1;
    align-items:center;
    justify-content:center;
    
`

export const BackgroundCover=styled.View`
position:absolute;
width:100%;
height:100%;
background-color:rgba(255,255,255,0.3)
`
export const ButtonContainers=styled.View`
    background-color:rgba(255,255,255,0.7);
    padding:${(props)=>props.theme.space[4]};
    margin-top:${(props)=>props.theme.space[2]};
`
export const AuthButton=styled(Button).attrs({
    buttonColor:colors.brand.primary,
})`
    width:250px;
    padding:${(props)=>props.theme.space[2]}`

export const AuthInput=styled(TextInput)`
    width:250px;
    background-color:rgba(255,255,255,0.7);

`
export const Title=styled(Text)`
    font-size: 40px;
    color:purple
    font-weight:bold
    font-family:${(props)=>props.theme.fonts.body}
`
export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper=styled.View`
    width: 100%;
    height: 40%;
    position: absolute;
    top: 30px;
    padding: ${(props) => props.theme.space[2]};
`