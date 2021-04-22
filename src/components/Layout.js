import React from "react";
import NavigationBar from "./UI/NavigationBar/NavigationBar";
import styles from "../styles/components/Layout.module.css"
import { useCookies } from "react-cookie"

const Layout = props => {
    const [cookies] = useCookies(['cookie-name']);
    let background = styles.background
    if (cookies['alternative-background']) {
        background = styles.alternativeBackground
    }
    return (
        <React.Fragment >
            <div className={background}/>
            <NavigationBar/>
            <main>{props.children}</main>
        </React.Fragment>
    )
}

export default Layout