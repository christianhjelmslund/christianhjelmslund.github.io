import React from "react";
import styles from "../../../styles/ExternalNavigation.module.css"

const ExternalNavigation = props => (
    <img className={styles.ExternalNavigation} src={props.src} alt={props.alt} onClick={() =>
        window.open(props.link)}>
    </img>
)

export default ExternalNavigation