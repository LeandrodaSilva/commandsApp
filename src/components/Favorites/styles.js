import { StyleSheet } from 'react-native';
import {Colors} from "react-native/Libraries/NewAppScreen";

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000000',
    color: Colors.light,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    color: Colors.light,
  },

  gradient: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.88)',
    color: Colors.light,
    // margin: 1,
    // borderRadius: 4,
  },

  header: {
    paddingTop: 10,
    alignItems: 'center',
    height: 50,
    left: 0,
    width: '100%',
  },

  headerTitle: {
    fontSize: 20,
    color: Colors.light
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  appContainer: {
    flex: 2,
    width: '100%',
    paddingHorizontal: 23,
  },

  appList: {
    backgroundColor: 'rgba(62, 60, 60, 0.1)',
    width: '100%',
    marginBottom: 55,
    borderRadius: 8,
  },

  appRow: {
    width: '100%',
    // backgroundColor: 'rgba(255,255,255,0.4)',
  },

  app: {
    flexDirection: 'row',
    marginBottom: 10,
    width: '100%',
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(62, 60, 60, 0.5)',
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },

  appName: {
    marginTop: 5,
    fontSize: 15,
    color: Colors.light,
  },

  appText: {
    flex: 4,
  },

  appCopy: {
    flex: 1,
  },

  appRemove: {
    flex:1,
  },

  menuBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 13,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 4,
  },

  menuBottomItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginHorizontal: 10,
    width: 70,
  },

  menuBottomItemText: {
    color: Colors.light,
    alignSelf: 'center',
  },

  menuBottomItemIcon: {
    height: 40,
  }
})
