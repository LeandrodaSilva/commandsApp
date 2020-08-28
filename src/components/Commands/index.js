import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {FlatList, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View} from 'react-native';

import api from '../../services/api';
import styles from './styles';

import adicionarIcon from '../../assets/adicionar.png';
import homeIcon from '../../assets/inicio.png';
import Gradient from "../Gradient";

export default function Commands() {
  const [commands, setCommands] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const route = useRoute();
  const app = route.params.app;

  function navigateToDetails(app) {
    navigation.navigate('Details', { app });
  }

  function navigateToHome() {
    navigation.navigate('Home');
  }

  function navigateToAddCommand() {
    navigation.navigate('CreateCommand');
  }

  async function loadCommands() {
    if (loading) return;

    setLoading(true);
    const response = await api.get('command', {params: {"id_app": app.id}});

    setCommands(response.data);
    setLoading(false);
  }

  useEffect(() => {loadCommands()}, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={ styles.container }>
          <Gradient />
          <View style={ styles.gradient }>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>
                {app.name}
              </Text>
            </View>

            <View style={styles.appContainer}>
              <FlatList
                style={styles.appList}
                data={commands}
                keyExtractor={command => String(command.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadCommands}
                onEndReachedThreshold={0.4}
                renderItem={({ item: command }) => (

                  <View style={styles.appRow}>
                    <TouchableOpacity onPress={() => navigateToDetails(command)}>
                      <View style={styles.app}>
                        <Text style={styles.appName}>{command.name}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>


                )}
              />
            </View>


            <View style={styles.menuBottom}>
              <View style={styles.menuBottomItem}>
                <TouchableOpacity onPress={() => navigateToAddCommand()}>
                  <Image style={styles.menuBottomItemIcon} source={adicionarIcon} />
                  <Text style={styles.menuBottomItemText}>Adicionar</Text>
                </TouchableOpacity>
              </View>

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

