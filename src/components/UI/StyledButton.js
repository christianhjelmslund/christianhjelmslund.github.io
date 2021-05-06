import React from "react";
import Button from "react-bootstrap/Button";
import styles from "../../styles/components/UI/StyledButton.module.css"

const StyledButton = (props) => (
    <Button disabled={props.disabled}
            variant={'none'}
            className={
                [
                    props.noPointerEvents ? styles.noPointerEvent : null,
                    props.active ? styles.styledButtonActive : null,
                    styles.styledButton,
                ].join(' ')}
            onClick={props.clicked}>
            <div className={styles.styledButtonText}>
                {props.buttonTitle}
            </div>
    </Button>
)

export default StyledButton