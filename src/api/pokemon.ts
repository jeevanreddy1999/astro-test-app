import { PokemonClient } from "pokenode-ts";
const api = new PokemonClient();

export const getPokemonByName = async (name: string) => {
  try {
    return await api.getPokemonByName(name);
  } catch (e) {
    console.log(e.response.status, "error");
    return "error";
  }
};
