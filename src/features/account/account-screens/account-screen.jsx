import React from 'react'
import { AnimationWrapper, AuthButton, BackgroundCover, BackgroundImage, ButtonContainers, Title } from '../components/account-styles'
import home from '../../../../assets/home_bg.jpg' 
import { Spacer } from '../../../components/spacer/spacer-comp'
import { Text } from '../../../components/typography/text-comp'
import LottieView from 'lottie-react-native';
import watermelon from '../../../../assets/watermelon.json'
const AccountScreen = ({navigation}) => {
  return (
    // <BackgroundImageContainer>
        <BackgroundImage source={home} resizeMode="cover">
            {/* <BackgroundCover/>  this component lighten up the background   */}
            <AnimationWrapper>
              <LottieView 
                  key={"animation"}
                  autoPlay
                  loop
                  resizeMode='cover'
                  // source={watermelon}
                  source={require('../../../../assets/watermelon.json')} // we can also import like this
                  />

            </AnimationWrapper>
            <Text style={{fontSize:50}}>Meals to Go</Text>
            <ButtonContainers>
              <AuthButton 
                  icon="lock-open-outline" 
                  mode="contained" 
                  onPress={() =>navigation.navigate("Login")}>
                Login
              </AuthButton>
              <Spacer size='large'>
                 <AuthButton 
                  icon="account-plus" 
                  mode="contained" 
                  onPress={() =>navigation.navigate("Register")}>
                Register
              </AuthButton>
              </Spacer>
            </ButtonContainers>
        </BackgroundImage>
    // </BackgroundImageContainer>
  )
}

export default AccountScreen