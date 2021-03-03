import React, {Fragment, useEffect, useState} from "react";
import {connect} from "react-redux";
import {Row, Col, Container, Card, Button} from "react-bootstrap"
import * as actions from "../../redux/actions/actions"
import useHttpErrorHandler from "../../hooks/httpErrorHandling"
import withErrorHandler from "../../hoc/withErrorHandler"
import windowResize from "../../hooks/windowResize"

import Post from "../../components/Post/Post"
import Spinner from "../../components/UI/Spinner/Spinner";
import styled from 'styled-components'
import StyledButton from "../../components/UI/StyledComponents/StyledButton";

const StyledInput = styled.input`
      font: inherit;
      margin: 10px auto;
      width: 100%;
      border: 1px solid #ccc;
      padding: 0.3rem 0.3rem;
      border-radius: 10px;
      background: var(--custom_black);
      color: white;
      text-align: center;
      &:focus {
        outline: none;
        //border-bottom-color:var(--custom_black);
      }
`

export const Posts = props => {

    const {onFetchPosts} = props
    const [filteredPosts, setFilteredPosts] = useState('')
    const resize = windowResize();

    const filterPostByTitle = (title, posts) => {
        if (title === "") {
            setFilteredPosts(null)
        } else {
            setFilteredPosts(
                posts.filter(post => post.props.title ?
                    post.props.title.toUpperCase().trim().includes(title.toUpperCase().trim()) :
                    null)
            )
        }
    }

    const filterPostsByCategory = (category, posts) => {
        setFilteredPosts(posts.filter(post => post.props.category.includes(category)))
    }
    useEffect(() => {
        onFetchPosts()
    }, [onFetchPosts])

    let posts = []
    let categories = new Set([])
    if (props.posts) {
        posts = props.posts.map(post => {
            if (post.category) {
                for (let i = 0; i < post.category.length; i++) {
                    categories.add(post.category[i])
                }
            }
            return <Post
                id={post.id}
                key={post.id}
                date={post.date}
                title={post.title}
                author={post.author}
                content={post.content}
                popularity={post.popularity}
                category={post.category}
                image={post.image}
                images={post.images}
                codeblock={post.codeblocks}
                filter={(category) => filterPostsByCategory(category, posts)}/>
        }).reverse()
    }

    // let postsLeft = []
    // let postsRight = []
    let postView
    const filterView =
        <Card text={"white"} style={{backgroundColor: 'var(--custom_black)'}}>
        <Container style={{width: "90%", padding: "20px"}} fluid={true}>
            <Row>
                <StyledInput
                    id={"styledInput"}
                    placeholder={"search by title"}
                    onChange={event =>
                        filterPostByTitle(event.target.value, posts)
                    }>
                </StyledInput>
            </Row>
            <Row style={{paddingTop: "10px"}}>
                <p> At the moment you can filter the posts based on the title </p>
            </Row>
            <Row style={{paddingTop: "10px"}}>
                {  categories.size === 0 ? null :
                [...categories].map(category => {
                    return (<StyledButton id={category}
                                          key={category}
                                          variant="custom_dark"
                                          buttonTitle={category}
                                          clicked={() => filterPostsByCategory(category, posts)}/>)
                })
                }
            </Row>
            <Row style={{paddingTop: "10px"}}>
                <Button id={"reset"} style={{
                    width: "100%",
                    cursor: 'pointer'
                }} variant="danger" onClick={() => {
                    setFilteredPosts(null)
                }}>Reset
                </Button>
            </Row>
        </Container>
    </Card>
    if (resize.width >= 1025) {
        if (props.loading) {
            postView =
                <Fragment>
                    <Spinner/>
                </Fragment>
        } else if (posts.length > 0) {
            postView = <Fragment>
                <Col xs={"2"}>{filterView}</Col>
                <Col>{filteredPosts ? filteredPosts.slice(filteredPosts.length / 2) : posts.slice(posts.length / 2)}</Col>
                <Col>{filteredPosts ? filteredPosts.slice(0, filteredPosts.length / 2) : posts.slice(0, posts.length / 2)}</Col>
                <Col xs={"2"}/>
            </Fragment>
        }
    }
    // TODO: Fix this phone hack
    else {
        if (posts.length === 0) {
            postView = <Spinner/>
        } else {
            postView = <Fragment>
               <Col style={{width: "90%"}}>{posts}</Col>
            </Fragment>
        }
    }


    return (
        <React.Fragment>
            <Container style={{width: "100%", marginTop: "25px"}} fluid={true}>
                <Row>
                    {postView}
                </Row>
            </Container>
        </React.Fragment>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch(actions.getAllPosts())
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts,
        loading: state.posts.loading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Posts, useHttpErrorHandler))