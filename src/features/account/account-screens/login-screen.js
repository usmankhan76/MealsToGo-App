import React, { useContext, useState } from 'react'
import {  View } from 'react-native'
import { AuthButton, AuthInput, BackgroundImage, ButtonContainers, ErrorContainer, Title } from '../components/account-styles'
import home from '../../../../assets/home_bg.jpg' 
import styled from 'styled-components'
import { TextInput } from 'react-native-paper'
import { Spacer } from '../../../components/spacer/spacer-comp'
import { AuthenticationContext } from '../../../services/authentication/authentication-context'
import { auth } from '../../../firebase'
import { Text } from '../../../components/typography/text-comp'


const LoginScreen = ({navigation}) => {
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null)
  const {onLogin,error,isLoading}=useContext(AuthenticationContext);
  // console.log('thsi is the erorr in login',error)
  return (
        <BackgroundImage source={home} resizeMode="cover">
            {/* <Title>Meals To Go</Title> */}
            <Text style={{fontSize:50}}>Meals to Go</Text>
            <ButtonContainers>
              <AuthInput
                  label="E-mail "
                  mode='flat'
                  textContentType='emailAddress'
                  keyboardType='email-address'
                  autoCapitalize='none'
                  value={email}
                  onChangeText={(v)=>setEmail(v)}
                  />
              <Spacer  size='large'>
                <AuthInput
                  label="Password"
                  mode='flat'
                  textContentType='password'
                  secureTextEntry
                  autoCapitalize='none'
                  secure
                  value={password}
                  onChangeText={(v)=>setPassword(v)}
                  />
              </Spacer>
              {error && (
              <ErrorContainer>

                <Spacer size='large'>
                    <Text variant='error'>{error}</Text>
                  </Spacer>
              </ErrorContainer>
              )}
              <Spacer position='top' size='large'>
                <AuthButton 
                    icon="lock-open-outline" 
                    mode="contained" 
                    onPress={() =>onLogin(email,password)}
                    loading={isLoading}
                    >
                  Login
                </AuthButton>   
              </Spacer>

            <Spacer size='large'>
              <AuthButton mode="contained" 
                    onPress={() =>navigation.navigate("Main")}>Back</AuthButton>
            </Spacer>
            </ButtonContainers>
        </BackgroundImage>

  )
}

export default LoginScreen