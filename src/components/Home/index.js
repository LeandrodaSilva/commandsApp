import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, FlatList, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View} from 'react-native';

import api from '../../services/api';
import styles from './styles';

import adicionarIcon from '../../assets/adicionar.png';
import homeIcon from '../../assets/inicio.png';
import favoritosIcon from '../../assets/favoritos.png';
import Gradient from "../Gradient";
import AppIcon from "../AppIcon";

export default function Home() {
  const [apps, setApps] = useState([]);
  const [numColumns, setNumColumns] = useState(parseInt((Dimensions.get("screen").width) / 100));
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Home');
  }

  function navigateToFavorites() {
    navigation.navigate('Favorites');
  }

  function navigateToAdd() {
    navigation.navigate('CreateApp');
  }

  async function loadApps() {
    const response = await api.get('app');

    setApps(response.data);
  }

  useEffect(() => {
    loadApps()
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Gradient/>
          <View style={styles.gradient}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>
                Commands App
              </Text>
            </View>

            <View style={styles.appContainer}>
              <FlatList
                style={styles.appList}
                data={apps}
                keyExtractor={app => String(app.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadApps}
                onEndReachedThreshold={0.4}
                numColumns={numColumns}
                renderItem={({item: app}) => (

                  <View style={styles.appRow}>
                    <AppIcon app={app} onChange={loadApps}/>
                  </View>


                )}
              />
            </View>


            <View style={styles.menuBottom}>
              <View style={styles.menuBottomItem}>
                <TouchableOpacity onPress={() => navigateToAdd()}>
                  <Image style={styles.menuBottomItemIcon} source={adicionarIcon}/>
                  <Text style={styles.menuBottomItemText}>Adicionar</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.menuBottomItem}>
                <TouchableOpacity onPress={() => navigateToHome()}>
                  <Image style={styles.menuBottomItemIcon} source={homeIcon}/>
                  <Text style={styles.menuBottomItemText}>Home</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.menuBottomItem}>
                <TouchableOpacity onPress={() => navigateToFavorites()}>
                  <Image style={styles.menuBottomItemIcon} source={favoritosIcon}/>
                  <Text style={styles.menuBottomItemText}>Favoritos</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </View>

      </SafeAreaView>
    </>
  )
}

