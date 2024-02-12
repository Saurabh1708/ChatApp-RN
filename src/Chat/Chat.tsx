import React, { useCallback, useEffect, useRef } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { LatexRenderer } from './components/Latex'

export const Chat = ({ data, isLoading }) => {
  const flatlistRef = useRef()

  const renderItem = useCallback(({ item, index }) => {
    if (item.isLatex) {
      return <LatexRenderer latex={item.text} />
    } else if (item.isImage) {
      return <Image source={[{ uri: item.text }]} style={styles.image} />
    } else {
      const separatedText: Array<string> = item.text.split('**')
      if (separatedText.length % 2 === 0) {
        return (
          <View style={styles.textContainer}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )
      } else {
        return (
          <View style={styles.textContainer}>
            {separatedText.map((value, newIndex) => {
              if (newIndex % 2) {
                // return bold text
                return (
                  <Text style={[styles.text, { fontWeight: '700' }]}>
                    {value}
                  </Text>
                )
              } else {
                return <Text style={styles.text}>{value}</Text>
              }
            })}
          </View>
        )
      }
    }
  }, [])

  useEffect(() => {
    //
    flatlistRef.current?.scrollToEnd({ animated: true })
  }, [data])

  return (
    <FlatList
      ref={flatlistRef}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      data={data}
      onEndReachedThreshold={1}
      ListFooterComponent={isLoading && <ActivityIndicator size={'large'} />}
    />
  )
}

const styles = StyleSheet.create({
  text: {
    lineHeight: 20,
    fontSize: 16,
    color: 'black',
  },
  container: {
    marginHorizontal: 16,
    backgroundColor: '#e6dbd5  ',
    borderRadius: 12,
    padding: 16,
    paddingBottom: 100,
  },
  image: {
    height: 120,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 8,
    marginVertical: 12,
  },
  textContainer: {
    // flexDirection: 'row',
  },
})
