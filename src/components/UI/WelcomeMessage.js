import React from "react";
import styles from "../../styles/pages/Home.module.css"
import {Container} from "react-bootstrap";
import {useCookies} from "react-cookie";

const WelcomeMessage = () => {
    const [cookies] = useCookies(['name']);
    const cookie = cookies['welcome_message']
    console.log(cookies)
    console.log(cookies)
    if (cookie) {
        return <div className={styles.filterView}>
            <Container className={styles.filterViewContainer}>
                <p className={styles.content}>
                    You wrote this welcome message yourself:
                </p>
                <p className={styles.content}>
                    {cookie}
                </p>
                <p className={styles.content}>
                    It will expire 24 hours after it was set.
                </p>
            </Container>
        </div>
    } else {
        return null
    }
}

export default WelcomeMessage
