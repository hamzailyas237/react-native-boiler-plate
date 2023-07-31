import React, {useState} from 'react'
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import user from '../assets/user.png'
import background from '../assets/background.png'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Login({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginController = async () => {
    const token = 'e4324sd_ssa.dsad'
    await AsyncStorage.setItem('token', token)
    navigation.navigate('AppDrawer')
    Alert.alert(
      'User Logged In',
      'My Alert Msg',
      [
        {
          text: 'Proceed',
          onPress: () => console.log('Proceed Pressed'),
        },
        {text: 'Cancel'},
      ],
      {cancelable: true},
    )
  }
  return (
    <ImageBackground source={background} style={{height: '100%'}}>
      <View style={[{marginTop: 20}, styles.mainContainer]}>
        <Text style={styles.heading}>Login </Text>
        <Image source={user} style={styles.userImage} resizeMode="contain" />

        <TextInput
          placeholder="enter email"
          style={styles.input}
          onChangeText={e => setEmail(e)}
        />
        <TextInput
          placeholder="enter password"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={e => setPassword(e)}
        />
        <TouchableOpacity
          onPress={loginController}
          style={{
            width: '80%',
          }}>
          <Text
            style={{
              width: '100%',
              justifyContent: 'center',
              borderRadius: 10,
              backgroundColor: '#2E86C1',
              textAlign: 'center',
              lineHeight: 40,
              height: 40,
              color: 'white',
            }}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default Login

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  userImage: {
    width: 80,
    height: 150,
  },
  input: {
    width: '80%',
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginBottom: 10,
  },
})
