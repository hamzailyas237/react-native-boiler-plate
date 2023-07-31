import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Home from '../screens/Home'
import AppDrawer from '../screens/AppDrawer'

const Stack = createNativeStackNavigator()

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppDrawer"
          component={AppDrawer}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerSearchBarOptions: true,
          }}
          initialParams={{userId: 42}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
