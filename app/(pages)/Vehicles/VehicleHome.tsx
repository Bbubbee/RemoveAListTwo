import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import Svg, { Path } from 'react-native-svg';
import VehicleItem from './VehicleItem';
import { router } from 'expo-router';


import vehicles from '../../data/vehicles.json'


const VehicleHome = () => {
  return (
    <View style={styles.container}>
      {/* Your main content, wrapped in a ScrollView */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Your scrollable content goes here */}

        {
          vehicles.map((vehicle, id) =>
            <VehicleItem
              key={id}
              make={vehicle.make}
              model={vehicle.model}
              vin={vehicle.vin}
            />
          )
        }

      </ScrollView>

      {/* Add button */}
      <TouchableOpacity style={styles.addButton} onPress={() => router.push({
        pathname: "/(pages)/Vehicles/NewVehicle",
      })}>
        <Svg width="24" height="24" viewBox="0 0 24 24">
          <Path fill="white" d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 20, // Adjust padding as needed
    marginBottom: 20,
  },
  addButton: {
    position: 'absolute',
    bottom: 20, // Adjust bottom spacing as needed
    right: 20, // Adjust right spacing as needed
    width: 50, // Adjust button size as needed
    height: 50, // Adjust button size as needed
    borderRadius: 25, // Make it a circle
    backgroundColor: '#276FB1', // Adjust button background color as needed
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Add elevation for Android shadow
    marginBottom: 50,

  },
  addButtonImage: {
    width: 30, // Adjust image size as needed
    height: 30, // Adjust image size as needed
  },
});

export default VehicleHome