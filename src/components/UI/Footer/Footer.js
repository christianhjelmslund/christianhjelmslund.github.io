import React from 'react'
import styles from "../../../styles/components/Footer/Footer.module.css"
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className={styles.footerBreak}/>
            <div className={styles.footer}>
                <div className={styles.footerContent}>
                    <NavLink to={'about'} className={styles.footerElement}>
                        About me
                    </NavLink>
                    <NavLink to={'contact'} className={styles.footerElement}>
                        Contact
                    </NavLink>

                    <div className={styles.footerElement}>
                        Copyright © 2021 Christian Hjelmslund
                    </div>
                </div>
            </div>
        </>
    )

}

export default Footer