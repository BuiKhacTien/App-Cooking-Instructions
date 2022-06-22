import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height -180;

const styles = StyleSheet.create({
    item: {
        width: windowWidth - 50,
        height: windowHeight/2.3,
        backgroundColor: '#f7faf9',
        borderRadius: 20,
        marginBottom: 20,
      },
      boxImage: {
        width: '100%',
        height: '62%',
      },
      image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }, 
      textTitle: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#1da67f',
        marginTop: 5,
      },  
      boxIcon: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 5,
        alignItems: "center",
      },
      textHeart: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#040536",
        marginRight: 30,
        marginLeft: 5,
      },
      textSeen: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#040536",
        marginLeft: 5,
      }
});

export default styles;