import React from "react";

import { Card } from 'react-bootstrap'
import StyledButton from "../UI/StyledComponents/StyledButton";

import { Route } from 'react-router-dom'

const Post = (props) => {
    let pointer = "pointer"
    let buttonDisabled = false
    let onClick = (history) => {
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
                teaser: props.teaser
            }
        })
    }

    return (<Route render={({ history }) => (
        <Card text={"white"}
              style={{marginBottom: "20px",
                  backgroundColor: 'var(--custom_black)',
                  borderRadius: "2%"
              }}>
            <Card.Body style={{cursor: pointer}} onClick={() => onClick(history)}>
                <Card.Title style={{fontSize: "x-large"}}>{props.title}
                    <br/>
                    <span style={{fontSize:"small", color:"gray"}}>{props.date}</span>
                </Card.Title>
                <div style={{width: "100%", textAlign: "center"}}>
                    <Card.Img variant="top" src={props.thumbnail} style={{maxWidth: "600px"}} />
                </div>
                <br/>
                <br/>
                {props.teaser}
            </Card.Body>
            <Card.Footer>
                <flex-gap style={{
                    display: "inline-flex",
                    flexWrap: "wrap",
                    gap: "12px"
                }}>
                    {props.category ? props.category.map(category => {
                        return (<StyledButton disabled = {buttonDisabled}
                                              key={category}
                                              variant="custom_dark_blue"
                                              buttonTitle={category}
                                              clicked={() => props.filter(category)}/>)
                    }):null}
                </flex-gap>
            </Card.Footer>
        </Card>)}/>
    )
}

export default Post