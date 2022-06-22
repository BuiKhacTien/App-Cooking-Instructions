import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height -180;

const styles = StyleSheet.create({
  boxItem: {
    width: windowWidth/2 - 30,
    height: windowHeight/4,
    margin: 10,
  },
  item: {
    width: '100%',
    height: '100%',
  },
  boxImage: {
    width: '100%',
    height: '65%',
  },
  image: {
    width: '100%',  
    height: '100%',
    borderRadius: 10,
  },
  text: {
    color: '#1da67f',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 3,
  }
});

export default styles;