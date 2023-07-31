import 'react-native-gesture-handler'
import React from 'react'
import AppNavigation from './src/config/AppNavigation'
import {Provider} from 'react-redux'
import {store} from './src/store'

function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

export default App
