import { Component, createSignal } from "solid-js";
import { useStore } from "../../Global/state/zustand";

const One: Component = () => {
    const state = useStore()
    const [eiei , setEiei] = createSignal<number>(0)
  return( 
    <div class="max-size flex">
        <h1>Value is :</h1>
        <h1>{state.bears}</h1>
    </div>
  )
};

export default One;