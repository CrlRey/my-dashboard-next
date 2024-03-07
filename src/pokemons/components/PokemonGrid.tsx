 import React from 'react'
import { PokemonsCard, SimplePokemon } from '..';
 
 interface Props{
    pokemons: SimplePokemon[];
}

 export function PokemonGrid({ pokemons }: Props) {
   return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
       {pokemons.map( pk => (
              
            <PokemonsCard key={pk.id} simplePokemon={pk}/>
          ))}
    </div>
   )
 }

 
 