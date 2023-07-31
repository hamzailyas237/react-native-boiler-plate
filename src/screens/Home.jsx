import React, {useEffect} from 'react'
import {Button, Text, View} from 'react-native'
import {useTheme} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useSelector} from 'react-redux'

const Home = ({navigation, navigation: {setParams}, route}) => {
  const {userName, userId} = route.params
  const {colors} = useTheme()

  useEffect(() => {
    const getData = async () => {
      const token = await AsyncStorage.getItem('token')
      console.log('token', token)
    }
    getData()
  })

  const {cart} = useSelector(state => {
    return state
  })
  // console.log(cart)

  return (
    <View style={{marginTop: 20}}>
      <Text style={{fontSize: 20, textAlign: 'center', color: colors.text}}>
        Home Screen
      </Text>
      <View style={{padding: 10}}>
        <Text>User {userName} logged in</Text>
        <Text>User ID is {userId}</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Cart Items: {cart && cart.length}
        </Text>
      </View>
      <View style={{gap: 20, marginHorizontal: 10, marginTop: 10}}>
        <Button
          title="Change User Name"
          onPress={() => setParams({userName: 'Osama Ilyas'})}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  )
}

export default Home
