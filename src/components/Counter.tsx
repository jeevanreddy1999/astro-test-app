import { createSignal } from "solid-js";

const Counter = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div class="layout">
      <div class="counterHead">Counter</div>
      <div class="counter">
        <button onclick={() => setCount(count() - 1)}>-</button>
        <div>{count()}</div>
        <button onclick={() => setCount(count() + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;
