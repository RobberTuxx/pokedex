import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

interface PokemonProps {
  id: number;
  name: string;
}

export default function Pokemon(props: PokemonProps) {
  const navigate = useNavigation();

  const navInformation = () => {
    navigate.navigate('Information', {id: props.id});
  };

  return (
    <TouchableOpacity
      style={{marginVertical: 15, flex: 1}}
      onPress={navInformation}>
      <View style={styles.imageContainer}>
        <FastImage
          source={{
            uri:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +
              props.id +
              '.png',
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.contain}
          style={{width: 70, height: 70}}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: 'center',
    flex: 4,
  },
  imageContainer: {
    flex: 2,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
});
