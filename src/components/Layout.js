import React from "react";
import NavigationBar from "./UI/NavigationBar/NavigationBar";
import Footer from "./UI/Footer/Footer";
import styles from "../styles/components/Layout.module.css"

const Layout = props => {
    return (
        <body className={styles.body}>
            <div className={styles.background}/>
            <NavigationBar/>
            <main className={styles.content}>{props.children}</main>
            <Footer/>
        </body>
    )
}

export default Layout