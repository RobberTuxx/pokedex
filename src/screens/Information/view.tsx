import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {style} from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {MainClient} from 'pokenode-ts';

interface Pokemon {
  height: number;
  weight: number;
  id: number;
  moves: {move: {name: string}}[];
  types: {type: {name: string}}[];
  name: string;
}
export default function Information() {
  const navigation = useNavigation();
  const route = useRoute();
  const [pokemon, setPokemon] = useState({} as Pokemon);
  const pokeApi = new MainClient();
  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const pokemonData = await pokeApi.pokemon.getPokemonById(route.params.id);
    setPokemon(pokemonData as Pokemon);
  };

  function getTypes() {
    let types = '';
    pokemon?.types?.forEach(value => {
      types += value.type.name + ' ';
    });
    return types;
  }
  return (
    <View style={style.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={style.back}>
          <Text style={{color: 'white'}}>back</Text>
        </TouchableOpacity>
        <Text style={style.title}>Information</Text>
        <View style={{flex: 1}} />
      </View>
      <View>
        <View style={{alignItems: 'center'}}>
          <FastImage
            source={{
              uri:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +
                route.params.id +
                '.png',
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.contain}
            style={{width: 250, height: 250}}
          />
          <Text style={style.name}>{pokemon?.name}</Text>
        </View>
        <View style={style.containerSize}>
          <Text style={style.size}>height: {pokemon?.height}ft</Text>
          <Text style={style.size}>weight: {pokemon?.weight}lb</Text>
        </View>
        <Text style={style.types}>Types:{' ' + getTypes()}</Text>
        <Text style={style.moves}>Moves</Text>
        <FlatList
          style={{height: 300}}
          data={pokemon?.moves}
          numColumns={2}
          renderItem={({item}) => {
            return <Text style={style.move}>{item.move.name}</Text>;
          }}
        />
      </View>
    </View>
  );
}
