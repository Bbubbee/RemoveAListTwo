import { Text, View, StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'

import InfoItem from './InfoItem';
import { useLocalSearchParams } from 'expo-router';

interface Props {

}

const VehicleInfo = () => {

  const { data } = useLocalSearchParams();
  console.log(data);


  return (
    <ScrollView style={styles.container}>

      <InfoItem>Plate Number</InfoItem>
      <InfoItem>Type</InfoItem>
      <InfoItem>Year</InfoItem>
      <InfoItem>Make</InfoItem>
      <InfoItem>Model</InfoItem>
      <InfoItem>VIN</InfoItem>
      <InfoItem>Date of Purchase</InfoItem>
      <InfoItem>Cost</InfoItem>
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
