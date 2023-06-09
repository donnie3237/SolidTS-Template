import { A } from "@solidjs/router";
import { Component } from "solid-js";
import './Header.scss' 

const Header: Component<{}> = (props) => {
  return <div>
    <div class="header">
        <div class="logo">
            <A class="a" href="/">SolidJS</A>
        </div>
        <A class="a" href="/one">ONE</A>
        <A class="a" href="/two">TWO</A>
        <A class="a" href="/three">THREE</A>
    </div>
  </div>;
};

export default Header;