import { createSignal, createEffect, For } from "solid-js";

const fruits = ["mango", "orange", "banana"];

const Counter = () => {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    console.log("count", count());
  });

  return (
    <div class="layout">
      <div class="counterHead">Counter</div>
      <div class="counter">
        <button onclick={() => setCount(count() - 1)}>Remove</button>
        <div>{count()}</div>
        <button onclick={() => setCount(count() + 1)}>Add</button>
      </div>
    </div>
  );
};

export default Counter;
