import React from "react";
import {NavLink} from "react-router-dom"

import styles from "../../../styles/NavigationItem.module.css"

const NavigationItem = props => {
    return (
        <li className={styles.NavigationItem}>
            <NavLink onClick={props.clicked} to={props.link} activeClassName={styles.active} exact={props.exact}>
                {props.children}
            </NavLink>
        </li>
    )
}

export default NavigationItem