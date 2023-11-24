import { StyleSheet } from "react-native";


export const CustomTabBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderTopWidth: 0.5,
    borderTopColor: 'grey',
    height: 80,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  arc: {
    position: 'absolute',
    bottom: 0,
    width: 30,
    height: 20,
    backgroundColor: 'black',
    borderTopLeftRadius: 15,
  },
});
