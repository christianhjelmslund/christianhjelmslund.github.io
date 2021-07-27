import React from 'react';
import { Route, Switch, Redirect, HashRouter} from "react-router-dom";

import './styles.scss'
import ScrollToTop from "./hooks/scrollToTop";

import Layout from "./components/Layout";
import Posts from "./pages/Home"
import PostPage from "./pages/Post"
import About from "./pages/About"
import CookiePage from "./pages/CookieConsent"
import Contact from "./pages/Contact";

const App = () => {
    let routes = (
        <>
            <ScrollToTop />
            <Switch>
                <Route path={"/"} exact component={Posts}/>
                <Route path={"/about"} component={About}/>
                <Route path={"/contact"} component={Contact}/>
                <Route path={"/cookie_consent"} component={CookiePage}/>
                <Route path={"/:postId"} component={PostPage}/>
                <Redirect to={"/"}/>
            </Switch>
        </>
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