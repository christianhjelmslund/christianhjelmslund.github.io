import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect, HashRouter} from "react-router-dom";

import './styles.scss'
import ScrollToTop from "./hooks/scrollToTop";

import Layout from "./components/Layout";
import Posts from "./pages/Home"
import Spinner from "./components/UI/Spinner"
const Post = lazy(() => import('./pages/Post'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const CookieConsent = lazy(() => import('./pages/CookieConsent'));

const App = () => {
    let routes = (
        <>
            <ScrollToTop />
            <Switch>
                <Suspense fallback={<Spinner/>}>
                <Route path={"/"} exact component={Posts}/>
                <Route path={"/about"} component={About}/>
                <Route path={"/contact"} component={Contact}/>
                <Route path={"/services"} component={Services}/>
                <Route path={"/cookie_consent"} component={CookieConsent}/>
                <Route path={"/:postId"} component={Post}/>
                <Redirect to={"/"}/>
                </Suspense>
            </Switch>
        </>
    )

    return (
        <HashRouter>
            <Layout>
                {routes}
            </Layout>
        </HashRouter>
    );
}

export default App;