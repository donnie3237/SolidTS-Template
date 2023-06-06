import { Component , lazy } from "solid-js";
import {Router ,Routes , Route} from '@solidjs/router'
import Header from "../components/Header/Header";
const MainPage = lazy(() => import("../pages/Main/MainPage"));
const One = lazy(()=> import("../pages/One/One"))
const Two = lazy(()=> import("../pages/Two/Two"))
const Three = lazy(()=> import("../pages/Three/Three"))

const MainRoute: Component<{}> = (props) => {
  return (
    <div class="Layout">
        <Router>
            <Header/>
            <Routes>
                <Route path="/" component={MainPage} />
                <Route path="/one" component={One} />
                <Route path="/two" component={Two} />
                <Route path="/three" component={Three} />
            </Routes>
        </Router>
    </div>
    )
};

export default MainRoute;