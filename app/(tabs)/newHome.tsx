import React from 'react'
import { Text, View } from '@/components/Themed';
import Services from '@/components/Services';
import { StyleSheet } from 'react-native';



const newHome = () => {
  return (
    <View >
      <Services />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default newHome

