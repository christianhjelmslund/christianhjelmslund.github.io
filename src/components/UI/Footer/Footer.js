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
                    <a rel="noopener noreferrer" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/christianhjelmslund-61487.appspot.com/o/resume.pdf?alt=media&token=5db45a1a-132e-4544-9ce1-39fd202b627c" className={styles.footerElement}>Resume</a>

                    <div className={styles.footerElement}>
                        Copyright © 2021 Christian Hjelmslund
                    </div>
                </div>
            </div>
        </>
    )

}

export default Footer