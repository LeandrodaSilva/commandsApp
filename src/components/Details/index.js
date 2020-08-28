import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import homeIcon from '../../assets/inicio.png';
import Gradient from "../Gradient";

export default function Details() {
  const navigation = useNavigation();


  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={ styles.container }>
          <Gradient />
          <View style={ styles.gradient }>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>
                Detalhes
              </Text>
            </View>

            <View style={styles.appContainer}>

            </View>


            <View style={styles.menuBottom}>
              <View style={styles.menuBottomItem}>
                <TouchableOpacity onPress={() => navigateToHome()}>
                  <Image style={styles.menuBottomItemIcon} source={homeIcon} />
                  <Text style={styles.menuBottomItemText}>Home</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </View>

      </SafeAreaView>
    </>
  )
}

