import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View} from 'react-native';

import api from '../../services/api';
import styles from './styles';

import homeIcon from '../../assets/inicio.png';
import Gradient from "../Gradient";
import Command from "../Command/Command";

export default function Favorites() {
  const [commands, setCommands] = useState([]);

  const navigation = useNavigation();

  function navigateToDetails(appId) {
    navigation.navigate('Details', { appId });
  }

  function navigateToHome() {
    navigation.navigate('Home');
  }

  async function loadFavorites() {
    const response = await api.get('command', {params: {favorite: true}});
    if (response.data.length) {
      setCommands(response.data);
    } else {
      navigateToHome();
    }
  }

  async function disfavor(item) {
    const response = await api.put( `command/${item.id}` , {...item, ...{favorite: false}});
  }

  useEffect(() => {loadFavorites()}, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={ styles.container }>
          <Gradient />
          <View style={ styles.gradient }>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>
                Favoritos
              </Text>
            </View>

            <View style={styles.appContainer}>
              <FlatList
                style={styles.appList}
                data={commands}
                keyExtractor={command => String(command.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadFavorites}
                onEndReachedThreshold={0.4}
                renderItem={({ item: command }) => (

                  <View style={styles.appRow}>
                     <Command item={command}
                              navigateTo={() => navigateToDetails(command.id)}
                              onPressRemove={disfavor}
                              onChange={loadFavorites}/>
                  </View>

                )}
              />
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

