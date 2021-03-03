import React from "react";
import {Card, Image} from "react-bootstrap";
import data from "./data"
export default post => {
    if (!post) { return post }

    const components = []
    let idx = 0
    if (post.images) {
        console.log(post.images)
        for (let img in post.images) {
            img = post.images[img]
            components.push(post.content.substring(idx,img.index))
            idx = img.index
            components.push(<br key={idx}/>)
            components.push(<br key={idx+1}/>)
            components.push(<Image key={idx+2} className={"img-fluid"} src={img.url}/>)
            components.push(<br key={idx+3}/>)
            components.push(<br key={idx+4}/>)
        }
        // to also include the last content
        if (idx < post.content.length) {
            components.push(post.content.substring(idx,post.content.length))
        }
    }
    // console.log(post)
    if (post.codeblock) {
        components.push(<span dangerouslySetInnerHTML={{ __html: data}}/>)
    }
    else {
        components.push(post.content)
    }
    // components.push(codeblock)

    return <Card.Text style={{
        whiteSpace: "pre-wrap",
        fontSize: "large"
    }}>
        {components}
    </Card.Text>

}