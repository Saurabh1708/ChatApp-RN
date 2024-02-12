import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { preprocessLatex } from '../Chat.utils'
import { MathText } from 'react-native-math-view'

export const LatexRenderer = ({ latex }: { latex: string }) => {
  const separatedText: Array<string> = latex.split('**')
  if (separatedText.length % 2 === 0) {
    return <MathText style={styles.mathText} value={preprocessLatex(latex)} />
  }
  
  return (
    <>
      {separatedText.map((value, index) => {
        if (index % 2 !==0) {
          //bold text
          return (
            <Text style={[styles.mathText, { fontWeight: '700' }]}>
              {value}
            </Text>
          )
        } else {
          return (
            <MathText style={styles.mathText} value={preprocessLatex(value)} />
          )
        }
      })}
    </>
  )
}

const styles = StyleSheet.create({
  mathText: {
    fontSize: 12,
    backgroundColor: '#b0e0e6',
    borderRadius: 8,
    paddingHorizontal: 8,
    color: 'black',
    marginVertical: 8,
    lineHeight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
    height: 'auto',
    // flexWrap:'wrap'
  },
})
