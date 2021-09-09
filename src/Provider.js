import { useState, createContext } from "react";

const contextDefaultValues = {
    pokemons: [],
}

export const PokemonContext = createContext(
  contextDefaultValues
)

const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState(contextDefaultValues.pokemons)

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        setPokemons
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider