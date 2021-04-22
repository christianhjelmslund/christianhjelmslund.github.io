import React from "react";

import { Card } from 'react-bootstrap'
import StyledButton from "./UI/StyledButton";
import styles from "../styles/components/Post.module.css"
import { Route } from 'react-router-dom'

const Post = (props) => {
    let buttonDisabled = false
    let toPostPage = (history) => {
        history.push({
            pathname: "/"+props.id,
            post: {
                id: props.id,
                title: props.title,
                content: props.content,
                key: props.id,
                date: props.date,
                author: props.author,
                popularity: props.popularity,
                category: props.category,
                images: props.images,
                thumbnail: props.thumbnail,
                teaser: props.teaser,
                buttons: props.buttons
            }
        })
    }

    return (
        <Route render={({ history }) => (
            <Card className={styles.post}>
                <Card.Body className={'pointer'} onClick={() => toPostPage(history)}>
                    <Card.Title className={styles.title}>{props.title}</Card.Title>
                    <span className={styles.date}>{props.date}</span>
                    <div className={styles.alignImg}>
                        <Card.Img className={styles.img} variant="top" src={props.thumbnail} />
                    </div>
                    {props.teaser}
                </Card.Body>
                <Card.Footer className={styles.footer}>
                    {props.category ? props.category.map(category => {
                        return (<StyledButton disabled = {buttonDisabled}
                                              key={category}
                                              variant="custom_dark_blue"
                                              buttonTitle={category}
                                              clicked={() => props.filter(category)}/>)
                    }):null}
                </Card.Footer>
            </Card>)}
        />
    )
}

export default Post