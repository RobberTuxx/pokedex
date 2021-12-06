import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darker,
  },
  back: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 3,
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
  },
  name: {
    color: 'white',
    fontSize: 30,
    fontWeight: '900',
    marginVertical: 15,
  },
  size: {
    color: 'white',
    fontWeight: '900',
    fontStyle: 'italic',
    fontSize: 14,
  },
  types: {
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 14,
    fontWeight: '900',
  },
  moves: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 15,
    color: 'white',
    fontWeight: '900',
  },
  containerSize: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  move: {
    flex: 1,
    textAlign: 'center',
    color: 'gray',
    fontStyle: 'italic',
    fontWeight: '700',
    marginVertical: 2,
  },
});
