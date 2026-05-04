const BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemonList = async (limit = 30) => {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
  if (!response.ok) throw new Error("Failed to fetch Pokémon list");
  const data = await response.json();
  return data.results;
};

export const fetchPokemonDetails = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch Pokémon details");
  return await response.json();
};

// POST example (required by assignment)
export const postSearch = async (query) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) throw new Error("Search failed");
  return await response.json();
};
