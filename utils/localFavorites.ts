const toggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  if (favorites.includes(id)) {
    favorites = favorites.filter((favorite) => favorite !== id);
  } else {
    favorites.push(id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existPokemon = (id: number): Boolean => {
  if (typeof window === "undefined") return false;

  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  console.log(favorites.includes(id));
  return favorites.includes(id);
};

const pokemons = (): number[] => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export default { toggleFavorite, existPokemon, pokemons };
