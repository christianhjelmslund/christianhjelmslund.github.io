import React from "react";
import {Image} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import styles from "../styles/pages/PostPage.module.css";

export default post => {
    if (!post) { return post }
    const components = []
    if (post.content) {
        for (let paragraph in post.content) {
            paragraph = post.content[paragraph]
            components[paragraph.idx] =
                <div key={paragraph.idx}>
                    <h3 className={styles.keyword}>{paragraph.keyword}</h3>
                    <ReactMarkdown>{paragraph.content}</ReactMarkdown>
                </div>
        }
    }
    if (post.images) {
        for (let img in post.images) {
            img = post.images[img]
            components[img.idx] = <div key={img.idx} className={styles.divImg}>
                <Image className={"img-fluid"} src={img.url}/>
            </div>
        }
    }
    return components
}