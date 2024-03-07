import { PokemonGrid, PokemonsCard, PokemonsResponse, SimplePokemon } from "@/pokemons";
import Image from "next/image";


const getPokemon = async (limit = 20, offset = 0):Promise<SimplePokemon[]> => {
    const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res  => res.json());

    const pokemons = data.results.map( pokemon => ({
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name,
    }))

    return pokemons;
}

export default async function PokemonsPage() {

    const pkm = await getPokemon(300);

  return (
    <div className="flex flex-col">

    <span className="text-5xl my-2">Listado de pokemons <small>Statico</small> </span>

      <PokemonGrid pokemons={pkm} />

    </div>
  );
}