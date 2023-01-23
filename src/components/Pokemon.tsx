import { createSignal, createEffect } from "solid-js";

const Pokemon = () => {
  const [name, setName] = createSignal("");

  createEffect(() => {
    console.log("name", name());
  });

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
