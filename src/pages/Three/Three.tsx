import { Component, createSignal } from "solid-js";

const Three: Component<{}> = (props) => {
  const [count , setCount] = createSignal<number>(0)
  return <div class="max-size flex">
    <h1>Value is {count()}</h1>
    <div class="">
    <button onClick={()=>setCount((prev)=> prev -1 )}>-</button>
    <button onClick={()=>setCount((prev)=> prev +1)}>+</button>
    </div>
  </div>;
};

export default Three;