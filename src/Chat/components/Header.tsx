import React from 'react'
import { Image, Text, StyleSheet, Pressable } from 'react-native'

export const Header = () => {
  return (
    <Pressable onPress={() =>{}} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/icons/back.png')}
      />
      <Text style={styles.text}>MY CHAT APP</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginLeft: 16,
    flexDirection: 'row',
  },
  image: {
    height: 16,
    width: 16,
    marginRight: 16,
  },
  text: {
    alignSelf: 'center',
    fontWeight: '700',
    color: '#1a1a1a',
  },
})
