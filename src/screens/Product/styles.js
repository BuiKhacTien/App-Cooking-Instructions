import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - 124;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: windowHeight / 3,
  },
  backgroundBlur: {
    flex: 1,
    backgroundColor: 'rgba(245, 245, 245, 0.2)',
    flexDirection: 'column',
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#040536',
    marginTop: 10,
    textAlign: 'justify',
    padding: 10,
    backgroundColor: 'rgba(245, 245, 245, 0.8)',
    borderRadius: 10,
    marginBottom: 20,
  },
  containerIcon: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  boxIconHeart: {
    backgroundColor: '#e1fcf5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopRightRadius: 20,
  },
  boxIconSeen: {
    backgroundColor: '#e1fcf5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 20,
  },
  iconText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#040536',
    marginLeft: 10,
  },
  backgroundImageCook: {
  },
  containerIngredient: {
    width: '90%',
  },
  boxIngredient: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ingredientTitle: {
    width: '40%',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#02bd91',
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#f7fcfc',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  boxIngredientList: {
    flexDirection: 'column',
    backgroundColor: '#f7fcfc',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  ingredient: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ingredientText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black',
    textAlign: 'justify',
  },
  containerDoing: {
    width: '90%',
    paddingVertical: 20,
  },
  boxDoing: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  doingTitle: {
    width: '40%',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#02bd91',
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#f7fcfc',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  boxDoingList: {
    flexDirection: 'column',
    backgroundColor: '#f7fcfc',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  doing: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  doingText: {
    fontSize: 18,
    marginLeft: 10,
    color: 'black',
    textAlign: 'justify',
  },
});

export default styles;
