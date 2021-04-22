import React, {useState} from "react";
import {Image} from "react-bootstrap";
import styles from "../styles/pages/PostPage.module.css";
import StyledButton from "../components/UI/StyledButton";
import { useCookies } from "react-cookie"

export default post => {
    if (!post) { return post }
    const [, setCookie, deleteCookie] = useCookies();
    const components = []
    if (post.content) {
        for (let paragraph in post.content) {
            paragraph = post.content[paragraph]
            components[paragraph.idx] =
                <div key={paragraph.idx}>
                    <h3 className={styles.keyword}>{paragraph.keyword}</h3>
                    <p >{paragraph.content}</p>
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
    if (post.buttons) {
        for (let btn in post.buttons) {
            btn = post.buttons[btn]
            let btnFunction
            if (btn.function) {
                if (btn.function.cookie) {
                    const mode = Object.keys(btn.function.cookie)[0]
                    const key = Object.keys(btn.function.cookie[mode])[0]
                    const val = btn.function.cookie[mode][key]
                    if (mode === "set") {
                        btnFunction = () => {
                            setCookie(key,val)
                        }
                    } else {
                        btnFunction = () => {
                            deleteCookie(key,val)
                        }
                    }
                }
            }
            components[btn.idx] = <div key={btn.idx} className={styles.divImg}>
                <StyledButton buttonTitle={btn.title}
                              variant={btn.variant}
                              clicked={btnFunction}>
                </StyledButton>
            </div>
        }
    }
    return components
}