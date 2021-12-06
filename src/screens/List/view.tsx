import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {MainClient} from 'pokenode-ts';
import Pokemon from './components/Pokemon';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {style} from './style';

const pokeApi = new MainClient();

export default function List() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const data = await pokeApi.pokemon.listPokemons(0, 151);
    setPokemons(data.results);
  };
  return (
    <View style={{backgroundColor: Colors.darker}}>
      <Text style={style.title}>Pokemon's first generation</Text>
      <FlatList
        data={pokemons}
        numColumns={2}
        renderItem={({item, index}) => {
          return <Pokemon id={index + 1} name={item.name} />;
        }}
      />
    </View>
  );
}
