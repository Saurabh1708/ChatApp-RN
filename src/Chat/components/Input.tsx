import React, { useCallback, useState } from 'react'
import { View, TextInput, Pressable, Image, StyleSheet } from 'react-native'
import { useChunkData } from '../useChunkData'

export const Input = ({ startQueringData }) => {
  const [text, setText] = useState<string>('')

  const onChangeText = useCallback(
    (updatedText: string) => setText(updatedText),
    [],
  )

  return (
    <View style={styles.container}>
      <TextInput multiline onChangeText={onChangeText} style={styles.textInput}>
        {text}
      </TextInput>

      <Pressable onPress={startQueringData}>
        <Image
          style={styles.sendIcon}
          source={require('../../assets/icons/send.png')}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  sendIcon: { alignSelf: 'center' },
  container: {
    flexDirection: 'row',
    backgroundColor: '#7eccec',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  textInput: {
    width: '80%',
    height: 'auto',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 12,
    fontSize: 20,
    padding: 16,
  },
})
