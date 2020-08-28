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
    // backgroundColor: '#5fcd53',
    width: '100%',
  },

  appRow: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.4)',
  },

  app: {
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(238,74,74,0.4)',
  },

  appName: {
    marginTop: 5,
    fontSize: 15,
    color: Colors.light,
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
