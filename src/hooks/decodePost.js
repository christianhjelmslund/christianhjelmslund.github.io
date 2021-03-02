import React from "react";
import {Card, Image} from "react-bootstrap";

export default post => {
    if (!post) { return post }

    const components = []
    if (post.image) {
        components.push(post.content.substring(0,post.image.index))
        components.push(<br/>)
        components.push(<br/>)
        components.push(<Image className={"img-fluid"} src={post.image.url}/>)
        components.push(<br/>)
        components.push(<br/>)
        components.push(post.content.substring(post.image.index,post.content.length))
    } else {
        components.push(post.content)
    }

    return <Card.Text style={{
        whiteSpace: "pre-wrap",
        fontSize: "large"
    }}>
        {components}
    </Card.Text>

}