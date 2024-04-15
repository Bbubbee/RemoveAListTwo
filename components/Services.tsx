import React from 'react'
import { Text, View } from '@/components/Themed';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

import { Link, router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';



const Services = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.scrollView} horizontal={false}>
      <View style={styles.container}>

        <View style={styles.box}>
          <TouchableOpacity style={styles.inner} onPress={() => {
            // router.push("/")
          }}>

            <FontAwesome6 name="boxes-stacked" size={24} color="black" />
            <Text>Boxes</Text>
            {/* <Link href="/(pages)/TestPage">About</Link> */}
            {/* ...other links */}

          </TouchableOpacity>

        </View>

        <View style={styles.box}>
          <TouchableOpacity style={styles.inner} onPress={() => {
            router.push("/(pages)/Vehicles/Vehicle")
          }}>
            <FontAwesome6 name="car-on" size={24} color="black" />
            <Text>Vehicle/Vessel</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity style={styles.inner}>
            <FontAwesome6 name="truck-front" size={24} color="black" />
            <Text>Kerbside</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView >

  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '80%',
    height: '85%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  box: {
    width: '50%',
    height: '30%',
    padding: 10,
  },

  inner: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 10,
    padding: 10,
  },

  scrollView: {
    alignSelf: 'center',
    width: '80%',
    height: '100%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})

export default Services

