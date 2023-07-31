import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const Post = () => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          paddingVertical: 10,
          paddingHorizontal: 10,
          width: 120,
          margin: 10,
        }}>
        <Text style={{color: 'white'}}>Open Camera</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Post
