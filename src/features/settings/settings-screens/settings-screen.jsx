import React, { useCallback, useContext, useEffect, useState } from 'react'
import { SafeArea } from '../../../components/utility/safe-area-component';
import { AuthenticationContext } from '../../../services/authentication/authentication-context';
import {  TouchableOpacity } from "react-native";
import {  List,Avatar  } from 'react-native-paper';
import styled from 'styled-components';
import { Spacer } from '../../../components/spacer/spacer-comp';
import { Text } from '../../../components/typography/text-comp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
const SettingsSection= styled(List.Section)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
  margin-top:20px
`;

export const  SettingScreen=({navigation})=> {
        const {onLogout,user}=useContext(AuthenticationContext)
        const [photo,setPhoto]=useState(null)

        // useFocusEffect(useCallback(()=>getPhoto(user),[user,getPhoto]))// this method is not work because we need wrap it in asyncronus function and call that from useFocusEffect callback see below
             
        useFocusEffect(useCallback(()=>{
            let isActive=true;
        
           const storePhoto= async (user)=>{
            try {  
                console.log("user in useFocusEffect",user.uid)
                const photeUri=await AsyncStorage.getItem(`${user.uid}-photo`)
                if(isActive){
                    
                    setPhoto(photeUri)     
                }
            } catch (error) {
                console.log("useFocusEffect error",error.message)
            }
        }
        storePhoto(user)
        return ()=>{isActive=false}
        },[user,photo])) // useFocusEffect is similar to useEffect but it will render on every back screen focus
              
              
        return (
            <SafeArea>
                <AvatarContainer>
                    <TouchableOpacity onPress={()=>navigation.navigate("Camera")}>
                    {photo &&<Avatar.Image size={180} source={{uri:photo}}/>}
                    {!photo && <Avatar.Icon size={180} icon="account"  backgroundColor="#2182BD"/>}
                    </TouchableOpacity>
                    <Spacer position='top' size='large'>
                        <Text variant="label">{user.email}</Text>

                    </Spacer>
                </AvatarContainer>
                <SettingsSection >
                    <List.Item 
                        // style={{ padding: 16 }}
                        title="Favorites" 
                        description="View your favourites"
                        left={()=><List.Icon icon="heart" color='black'/>}
                        onPress={()=>navigation.navigate("Favourites")}
                    />
                    <List.Item 
                        // style={{ padding: 16 }}
                        title="Logout" 
                        left={()=><List.Icon color='black' icon="logout"/>}
                        onPress={onLogout}/>
                </SettingsSection>
            </SafeArea>
        );
}