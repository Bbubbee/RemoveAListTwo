import { View, Text, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'


interface Props {
  children: ReactNode
}

const InfoItem = ({ children }: Props) => {
  return (
    <View>
      <Text style={styles.name}>{children}</Text>
      <Text style={styles.content}>Sample Text</Text>
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