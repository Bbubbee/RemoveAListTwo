import { Text, View, StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'

import InfoItem from './InfoItem';
import { useLocalSearchParams } from 'expo-router';

import vehicles from '../../data/vehicles.json'



const VehicleInfo = () => {
  // Show vehicle info of 1 vehicle. 
  const params = useLocalSearchParams();
  const vin = params['vin']

  let vehicleInfoToShow = vehicles[0];
  const findVehicleUsingVin = vehicles.find(vehicle => vehicle.vin === vin);
  if (findVehicleUsingVin) vehicleInfoToShow = findVehicleUsingVin;



  return (
    <ScrollView style={styles.container}>

      <InfoItem title={vehicleInfoToShow.plateNumber}>
        Plate Number
      </InfoItem>
      <InfoItem title={vehicleInfoToShow.vin}>
        VIN
      </InfoItem>
      <InfoItem title={vehicleInfoToShow.state}>
        State
      </InfoItem>
      <InfoItem title={vehicleInfoToShow.type}>
        Type
      </InfoItem>
      <InfoItem title={vehicleInfoToShow.make}>
        Make
      </InfoItem>
      <InfoItem title={vehicleInfoToShow.model}>
        Model
      </InfoItem>
      <InfoItem title={vehicleInfoToShow.colour}>
        Colour
      </InfoItem>
      <InfoItem title={vehicleInfoToShow.engineNumber}>
        Engine Number
      </InfoItem>
    </ScrollView>
  )

}


const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginHorizontal: 30,
  },


});

export default VehicleInfo
