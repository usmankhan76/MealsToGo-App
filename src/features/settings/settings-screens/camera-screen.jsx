import AsyncStorage from '@react-native-async-storage/async-storage';
import { Camera, CameraType } from 'expo-camera';
import { useContext, useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconButton} from 'react-native-paper';
import { AuthenticationContext } from '../../../services/authentication/authentication-context';

export default function CameraScreen({navigation}) {
  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const {user}=useContext(AuthenticationContext)


  const cameraRef = useRef();




   const snap = async () => {
    try {
         if (cameraRef && cameraRef.current) {
       const photo = await cameraRef.current.takePictureAsync({base64:true});
      await AsyncStorage.setItem(`${user.uid}-photo`,photo.uri)
      navigation.goBack()
      //  console.log("it is photo",photo);
    }
      
    } catch (error) {
      console.log(error.message)
    }
   };
  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Camera 
          style={styles.camera} 
          type={type} 
          ref={(camera)=>cameraRef.current=camera} 

          ratio={"16:9"}
           
          >

        <View style={styles.buttonContainer}>
          <View style={styles.sanpCon}>
              <TouchableOpacity  onPress={snap}>
                  <View style={styles.snap}> 
                    <Text style={styles.snapText}> snap</Text> 
                  </View>
                </TouchableOpacity>
          </View>
            <IconButton
              icon="rotate-3d-variant"
              iconColor={'white'}
              size={40}
              onPress={toggleCameraType}
            />
          
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    alignItems:"center",
    justifyContent:'flex-end'

  },
  buttonContainer: {
    display:'flex',
    flexDirection: 'row',
    alignItems:'center',
    // backgroundColor: 'green',
    width:'100%',
    height:100,
    justifyContent:'space-between',
    // marginLeft: 64,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  sanpCon:{
    display:'flex',
    width:"60%",
    flexDirection:'row',
    justifyContent:'flex-end',
    // backgroundColor: 'red',

  },
  snap:{
    backgroundColor:"white",
    borderRadius:40,
    width:70,
    height:70,

  },
  snapText:{
    padding:14,
    marginTop:13
  }
});
