import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";
import { fetchPokemonDetails } from "./api";

export default function PokemonDetailScreen({ route }) {
  const { pokemon } = route.params;

  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadDetails = async () => {
    try {
      const data = await fetchPokemonDetails(pokemon.url);
      setDetails(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDetails();
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 28 }}>{details.name}</Text>

      <Image
        source={{ uri: details.sprites.front_default }}
        style={{ width: 150, height: 150 }}
      />

      <Text>Height: {details.height}</Text>
      <Text>Weight: {details.weight}</Text>
    </View>
  );
}
