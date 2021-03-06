import React from "react";
import {Image} from "react-bootstrap";

export default post => {
    if (!post) { return post }

    const components = []
    let idx = 0
    if (post.images) {
        for (let img in post.images) {
            img = post.images[img]
            components.push(<p style={{marginTop: "16px"}} key={idx}>{post.content.substring(idx,img.index)}</p>)
            idx = img.index
            components.push(<Image key={idx+1} className={"img-fluid"} src={img.url}/>)
        }
        if (idx < post.content.length) {
            components.push(<p key={idx+2} style={{marginTop: "16px"}}>{post.content.substring(idx,post.content.length)}</p>)
        }
    }
    else {
        components.push(post.content)
    }

    return components
}