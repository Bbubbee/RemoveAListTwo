
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router';


interface Props {
  make: string,
  model: string,
  vin: string
}

const VehicleItem = ({ make, model, vin }: Props) => {

  function handlePress() {
    router.push({
      pathname: "/(pages)/Vehicles/VehicleInfo",
      params: { vin: vin }
    })
  }

  return (
    <TouchableOpacity onPress={handlePress}>

      <View style={styles.container}>
        <Image style={styles.image} source={require('../../../assets/images/car.png')}></Image>
        <Text style={styles.text}>{make}, {model}</Text>
      </View>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,

    alignItems: 'center',
  },

  image: {
    width: 30,
    height: 30,
    tintColor: 'gray'
  },

  text: {
    color: 'black'
  }
})


export default VehicleItem
