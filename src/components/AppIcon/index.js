import React from 'react';
import {Alert, Image, StyleSheet, Text, TouchableOpacity, View, ViewPropTypes} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import api from "../../services/api";


export default function AppIcon({app, onChange}) {
  const navigation = useNavigation();

  function navigateToCommands(app) {
    navigation.navigate('Commands', {app});
  }

  async function remove() {
    const response = await api.delete( `app/${app.id}`);
    if (onChange) onChange();
  }

  async function removeAction() {
    Alert.alert(
      "Remover app",
      `Você está prestes a remover "${app.name}", certo?`,
      [
        {
          text: "NÃO",
          style: "cancel"
        },
        {
          text: "SIM",
          onPress: () => remove()
        }
      ],
      { cancelable: false }
    );
  }

  return (
    <TouchableOpacity onPress={() => navigateToCommands(app)} onLongPress={() => removeAction()}>
      <View style={styles.app}>
        <View style={styles.appIcon}>
          <Image style={styles.appIconImage} source={{uri: app.icon}}/>
        </View>
        <Text style={styles.appName}>{app.name}</Text>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  app: {
    marginBottom: 10,
    width: 70,
    marginHorizontal: 10,
    alignItems: 'center',
  },

  appName: {
    marginTop: 5,
    fontSize: 15,
    color: Colors.light,
  },

  appIcon: {
    borderRadius: 12,
    padding: 6,
    backgroundColor: 'rgba(62, 60, 60, 0.5)',
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },

  appIconImage: {
    width: 60,
    height: 60,
  },
})
