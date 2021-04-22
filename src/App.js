import React from 'react';
import { Route, Switch, Redirect, HashRouter} from "react-router-dom";

import './styles.scss'
import Layout from "./components/Layout";
import Posts from "./pages/Home"
import PostPage from "./pages/Post"
import About from "./pages/About"
import Emoji from "./components/UI/Emoji";

const App = () => {

    let routes = (
        <Switch>
            <Route path={"/"} exact component={Posts}/>
            <Route path={"/about"} component={About}/>
            <Route path={"/investing"} component={() => <p className={"under-construction"}>Under Construction... <Emoji symbol={"🏗"}/>️</p>}/>
            <Route path={"/:postId"} component={PostPage}/>
            <Redirect to={"/"}/>
        </Switch>
    )

    return (
        <HashRouter>
            <Layout >
                {routes}
            </Layout>
        </HashRouter>
    );
}

export default App;