import React from "react";
import NavigationBar from "./UI/NavigationBar/NavigationBar";
import styles from "../styles/components/Layout.module.css"

const Layout = props => {
    return (
        <React.Fragment >
            <div className={styles.background}/>
            <NavigationBar/>
            <main>{props.children}</main>
        </React.Fragment>
    )
}

export default Layout