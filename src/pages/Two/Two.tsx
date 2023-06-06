import { Component } from "solid-js";
import { useStore } from "../../Global/state/zustand";

const Two: Component<{}> = (props) => {
  
  return <div>
    <button onClick={() => useStore.setState((prev) => ({ bears: prev.bears + 1 }))}>
        one up
    </button>
  </div>;
};

export default Two;