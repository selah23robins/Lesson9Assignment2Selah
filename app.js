import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PokedexScreen from "./pokedexscreen";
import PokemonDetailScreen from "./pokemondetailscreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pokedex" component={PokedexScreen} />
        <Stack.Screen name="Details" component={PokemonDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
