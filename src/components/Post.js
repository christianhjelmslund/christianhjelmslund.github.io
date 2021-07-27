import React from "react";

import { Card } from 'react-bootstrap'
import styles from "../styles/components/Post.module.css"
import { Route } from 'react-router-dom'
import Tag from "./UI/Tag";

const Post = (props) => {
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

            <article className={styles.post}>
                <div className={'pointer'} onClick={() => toPostPage(history)}>
                    <div className={styles.title}>{props.title}</div>
                    <span className={styles.date}>{props.date}</span>
                    <div className={styles.alignImg}>
                        <Card.Img className={styles.img} variant="top" src={props.thumbnail} />
                    </div>
                    {props.teaser}
                </div>
                <div className={styles.footer}>
                    {props.category ? props.category.map(category => {
                        return (<Tag tagTitle={category}
                        />)
                    }):null}
                </div>
            </article>)}
        />
    )
}

export default Post