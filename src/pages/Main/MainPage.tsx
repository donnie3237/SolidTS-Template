import { Component, For } from "solid-js";
import { stack } from "../../utils/Stack";
import './mainpage.scss'

const MainPage: Component<{}> = (props) => {
  
    return(
        <div class="main">
            <For each={stack}>{(results) =>
                <div class="stack flex">
                    <img src={results.img} alt="" />
                    <h1>{results.name}</h1>
                </div>
                }
            </For>
        </div>
    )
};

export default MainPage;