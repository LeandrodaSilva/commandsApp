import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View} from 'react-native';

import styles from './styles';

import homeIcon from '../../assets/inicio.png';
import Gradient from "../Gradient";

export default function CreateCommand() {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  const navigation = useNavigation();


  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <>
      <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Gradient/>
          <View style={styles.gradient}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>
                Adicionar Comando
              </Text>
            </View>

            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, color: '#2b2b2b'}}
                       onChangeText={text => onChangeText(text)}/>

            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                       onChangeText={text => onChangeText(text)}/>


            <View style={styles.menuBottom}>
              <View style={styles.menuBottomItem}>
                <TouchableOpacity onPress={() => navigateToHome()}>
                  <Image style={styles.menuBottomItemIcon} source={homeIcon}/>
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

