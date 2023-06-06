import { Component } from "solid-js";
import { useStore } from "../../Global/state/zustand";

const Two: Component<{}> = (props) => {
  
  return <div class="max-size flex">
    <button class="btn" onClick={() => useStore.setState((prev) => ({ bears: prev.bears + 1 }))}>
        UP VALUE PAGE1
    </button>
  </div>;
};

export default Two;