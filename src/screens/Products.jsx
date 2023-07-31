import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  FlatList,
  Button,
} from 'react-native'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {ScrollView} from 'react-native-gesture-handler'
import {useDispatch, useSelector} from 'react-redux'
import {addToCart} from '../store/CartSlice'
import {fetchProducts} from '../store/ProductSlice'

const header = () => {
  return (
    <>
      <View
        style={{
          height: 50,
          width: '100%',
          backgroundColor: '#00B8D4',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text style={{color: 'white', fontSize: 20}}> Featured Products </Text>
      </View>
    </>
  )
}

const footer = () => {
  return (
    <>
      <View
        style={{
          height: 50,
          width: '100%',
          backgroundColor: '#00B8D4',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text style={{color: 'white', fontSize: 20}}> Loading more... </Text>
      </View>
    </>
  )
}

const divider = () => {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: 'black',
      }}
    />
  )
}

const ItemRender = ({item}) => {
  const dispatch = useDispatch()
  const addToCartController = () => {
    dispatch(addToCart('Cart Item'))
  }

  return (
    <View style={[styles.cardStyle, styles.shadow]}>
      <Image
        style={styles.cardImage}
        source={{uri: item.url}}
        alt="image"
        loadingIndicatorSource={<ActivityIndicator />}
      />
      <Text>ID: {item.id}</Text>
      <Text>Title: {item.title}</Text>
      <Button title="Add to cart" onPress={addToCartController} />
    </View>
  )
}

const Products = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const {cart} = useSelector(state => {
    return state
  })

  const {data, status} = useSelector(state => {
    return state.product
  })

  return (
    // <ScrollView>
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Cart Items: {cart && cart.length}
      </Text>

      {status == 'loading' ? (
        <ActivityIndicator size={30} marginTop={20} />
      ) : (
        data && (
          <FlatList
            data={data}
            renderItem={({item}) => <ItemRender item={item} />}
            // item prop in renderItem should be item we cant change it
            ItemSeparatorComponent={divider}
            keyExtractor={item => item.id}
            ListHeaderComponent={header}
            ListFooterComponent={footer}
          />
        )
      )}
    </View>
    // </ScrollView>
  )
}

export default Products

const styles = StyleSheet.create({
  cardStyle: {
    border: 1,
    margin: 20,
    padding: 10,
    backgroundColor: 'whitesmoke',
    objectFit: 'contain',
  },
  cardImage: {
    height: 180,
    width: '100%',
    objectFit: 'cover',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
})
