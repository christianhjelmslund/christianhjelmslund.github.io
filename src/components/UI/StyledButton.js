import React from "react";
import Button from "react-bootstrap/Button";
import styles from "../../styles/components/UI/StyledButton.module.css"

const StyledButton = (props) => (
    <Button disabled={props.disabled}
            variant={props.variant}
            className={[props.noPointerEvents ? styles.noPointerEvent : null, styles.styledButton].join(' ')}
            onClick={props.clicked}>
        {props.buttonTitle}
    </Button>
)

export default StyledButton