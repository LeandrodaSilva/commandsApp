import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {StyleSheet} from "react-native";

export default function Gradient() {
  return (
    <LinearGradient
      colors={['#00b791', '#1a538a', '#00139d']}
      start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
      style={styles.container}
    />
  )
}


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  }
})
