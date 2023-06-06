import type { Component } from 'solid-js';
import MainRoute from './Router/MainRoute';
import './Global/scss/Global.scss'

const App: Component = () => {
  return (
    <>
      <MainRoute/>
    </>
  );
};

export default App;
