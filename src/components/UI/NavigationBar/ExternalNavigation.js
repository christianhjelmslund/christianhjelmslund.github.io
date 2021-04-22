import React from "react";
import styles from "../../../styles/components/NavigationBar/ExternalNavigation.module.css"

const ExternalNavigation = props => (
    <img className={styles.externalNavigation} src={props.src} alt={props.alt} onClick={() =>
        window.open(props.link)}>
    </img>
)

export default ExternalNavigation