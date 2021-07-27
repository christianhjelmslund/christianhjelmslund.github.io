import React from "react";
import styles from "../../styles/components/UI/Tag.module.css"

const Tag = (props) => (
    <div className={styles.tag}>
        <div className={styles.tagText}>
            {props.tagTitle}
        </div>
    </div>
)

export default Tag