import Button from "react-bootstrap/Button";
import React from "react";

const StyledButton = (props) => (
    <Button disabled={props.disabled}
            variant={props.variant}
            style={{border: "2px solid white", margin: "5px", pointerEvents: props.pointerEvents}}
            onClick={props.clicked}>
        {props.buttonTitle}
    </Button>
)

export default StyledButton