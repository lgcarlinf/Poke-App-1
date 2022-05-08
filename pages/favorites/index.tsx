import { Card, Container, Grid, Text } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FavoritePokemons } from "../../components/pokemon";
import { NoFavorites } from "../../components/ui";
import Layout from "../../layout/Layout";
import { localFavorites } from "../../utils";

const FavoritesPage = () => {
  const [favPokemons, setFavPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavPokemons(localFavorites.pokemons());
    console.log(favPokemons);
  }, []);

  const handlePokemon = (id: number) => {};

  return favPokemons.length === 0 ? (
    <Layout>
      <NoFavorites />
    </Layout>
  ) : (
    <Layout>
      <FavoritePokemons pokemons={favPokemons} />
    </Layout>
  );
};

export default FavoritesPage;
