import React, { useContext } from 'react'
import { SafeArea } from '../../../components/utility/safe-area-component';
import { AuthenticationContext } from '../../../services/authentication/authentication-context';
import { View } from "react-native";
import { Button, List,Avatar  } from 'react-native-paper';
import styled from 'styled-components';
import { Spacer } from '../../../components/spacer/spacer-comp';
import { Text } from '../../../components/typography/text-comp';

const SettingsSection= styled(List.Section)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
  margin-top:20px
`;

export const  SettingScreen=({navigation})=> {
        const {onLogout,user}=useContext(AuthenticationContext)
        return (
            <SafeArea>
                <AvatarContainer>
                    <Avatar.Icon size={180} icon="account"  backgroundColor="#2182BD"/>
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