import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height -180;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  itemBox: {
    width: windowWidth*0.7,
    height: windowHeight/3.5,
    backgroundColor: 'white',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  boxImage: {
    width: '100%',
    height: '65%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1da67f',
    padding: 5,
  },  
  icon: {
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 5,
  },
});

export default styles;