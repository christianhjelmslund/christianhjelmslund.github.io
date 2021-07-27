import React from "react";
import styles from "../styles/pages/Home.module.css";
import Emoji from "../components/UI/Emoji";

const Contact = () => {
    return (
        <article className={styles.article}>
            <h1 className={styles.title}>Contact me {<Emoji symbol={"✉️"}/>}</h1>
            <p className={styles.content}>
                I am very open for any inquiries. You can add me on LinkedIn or Instagram or if you prefer, you can send a mail at christianhjelmslund.dev@gmail.com
            </p>
        </article>
    )
}

export default Contact