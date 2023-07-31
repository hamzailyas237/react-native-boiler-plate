import {View, Text, TouchableOpacity} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react'
import Setting from './Setting'
import Notification from './Notification'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator()

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarActiveBackgroundColor: '#2E86C1',
        // tabBarStyle: {display:'none'},
      }}>
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerStatusBarHeight: 30,
          title: 'This is notification screen',
          tabBarIcon: ({color, size}) => (
            <Icon name="notifications" color={'red'} size={size} />
          ),
          tabBarBadge: '1',
          tabBarBadgeStyle: {backgroundColor: 'black'},
          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTab
