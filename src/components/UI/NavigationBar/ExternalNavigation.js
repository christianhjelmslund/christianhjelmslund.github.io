import React from "react";
import styles from "../../../styles/components/NavigationBar/ExternalNavigation.module.css"

const ExternalNavigation = props => (
    <div className={styles.externalNavigation} onClick={() => window.open(props.link)}>
        {props.children}
    </div>
)

export default ExternalNavigation