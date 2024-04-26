import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'


interface Props {
  children: ReactNode,
  title: string
}

const InfoItem = ({ children, title }: Props) => {
  return (
    <View>
      <Text style={styles.name}>{children}</Text>
      <TextInput style={styles.content}>{title}</TextInput>
      <View style={styles.divider}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold'
  },

  content: {
    marginTop: 20,
  },

  divider: {
    width: '100%',
    borderColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
    marginBottom: 30
  }
})

export default InfoItem