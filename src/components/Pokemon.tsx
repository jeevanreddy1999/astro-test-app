import { createSignal } from "solid-js";

const Pokemon = () => {
  const [name, setName] = createSignal("");

  return (
    <div class="pokeLayout">
      <input
        type="text"
        oninput={(e) => setName((e.target as HTMLInputElement).value)}
        value={name()}
      />
      <div>
        <a href={`/pokemon/${name()}`}>Go to the {name()} page</a>
      </div>
    </div>
  );
};

export default Pokemon;
