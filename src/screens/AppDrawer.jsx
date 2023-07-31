import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from './Home'
import Profile from './Profile'
import BottomTab from './BottomTab'
import Products from './Products'
import Post from './Post'

const Drawer = createDrawerNavigator()
const AppDrawer = () => {
  return (
    <Drawer.Navigator backBehavior="history" initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        initialParams={{userName: 'Hamza Ilyas', userId: 42}}
        options={{
          headerTintColor: 'red',
          headerTitle: 'This is Home Screen',
          headerTitleAlign: 'center',
          drawerActiveBackgroundColor: 'red',
          drawerInactiveBackgroundColor: 'orange',
          drawerActiveTintColor: 'white',
          drawerInActiveTintColor: 'black',
          overlayColor: 'cyan',
          drawerPosition: 'left', //by default
          drawerStyle: {
            backgroundColor: '#c6cbef',
            width: 240,
          },
          drawerType: 'front', // by default
          drawerHideStatusBarOnOpen: true, // hide mobile bar (time, internet icon)
        }}
      />
      <Drawer.Screen name="Products" component={Products} />
      <Drawer.Screen name="Post Now" component={Post} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  )
}

export default AppDrawer
