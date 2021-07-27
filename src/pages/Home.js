import React, {Fragment, useEffect, useState} from "react";

import * as actions from "../redux/actions/actions"
import {connect} from "react-redux";

import withErrorHandler from "../components/hoc/withErrorHandler"
import useHttpErrorHandler from "../hooks/httpErrorHandling"
import windowResize from "../hooks/windowResize"

import styles from '../styles/pages/Home.module.css'
import Post from "../components/Post"
import Spinner from "../components/UI/Spinner";
import StyledButton from "../components/UI/StyledButton";
import WelcomeMessage from "../components/UI/WelcomeMessage";

import {Row, Col, Container, Button} from "react-bootstrap"

export const Home = props => {
    const {onFetchPosts} = props
    const [filteredPosts, setFilteredPosts] = useState([])
    const [activeCategories, setActiveCategories] = useState([])
    const resize = windowResize();

    const filterPostByTitle = (title, posts) => {
        if (title === "") {
            setFilteredPosts([])
        } else {
            setFilteredPosts(
                posts.filter(post => post.props.title ?
                    post.props.title.toUpperCase().trim().includes(title.toUpperCase().trim()) :
                    [])
            )
        }
    }

    const filterPostsByCategory = (category, posts) => {
        let activeCategoriesCopy = [...activeCategories]

        if (activeCategories.includes(category)) {
            activeCategoriesCopy = activeCategoriesCopy.filter(cat => cat !== category)
        } else {
            activeCategoriesCopy.push(category)
        }

        let filteredPostsCopy = posts.filter(post =>
            post.props.category.some(category => activeCategoriesCopy.includes(category))
        )
        setActiveCategories(activeCategoriesCopy)
        setFilteredPosts(filteredPostsCopy)
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
                teaser={post.teaser}
                thumbnail={post.thumbnail}
                buttons={post.buttons}
                activeCategories={activeCategories}
                />
        }).reverse()
    }
    const filterView =
        <div className={styles.filterView}>
            <Container className={styles.filterViewContainer}>
                <Row>
                    <input className='input'
                        placeholder={"Search..."}
                        onChange={event =>
                            filterPostByTitle(event.target.value, posts)
                        }>
                    </input>
                </Row>
                <Row>
                    <p> At the moment you can filter the posts by searching for the title or choosing a category below </p>
                </Row>
                <Row>
                    {  categories.size === 0 ? null :
                        [...categories].map(category => {
                            return (<StyledButton id={category}
                                                  key={category}
                                                  buttonTitle={category}
                                                  active={activeCategories.includes(category)}
                                                  clicked={() => filterPostsByCategory(category, posts)}/>)
                        })
                    }
                </Row>
                <Row className={"mt-3"}>
                    <Button className={styles.filterViewResetButton}
                            variant="danger"
                            onClick={() => {
                                setFilteredPosts([])
                                setActiveCategories([])
                            }}>
                        Reset
                    </Button>
                </Row>
            </Container>
        </div>
    let postView
    if (resize.width >= 1025) { // create a constants file
        if (props.loading) {
            postView =
                <Fragment>
                    <Spinner/>
                </Fragment>
        } else if (posts.length === 1) { // delete this
            postView = <Fragment>
                <Col/>
                <Col xs={"2"}>{filterView} </Col>
                <Col xs={"5"}>{filteredPosts.length > 0 ? filteredPosts : posts}</Col>
                <Col/>
            </Fragment>
        } else if (posts.length > 0) {
            postView = <Fragment>
                <Col xs={"2"}>{filterView}</Col>
                <Col>{filteredPosts.length > 0 ? filteredPosts.slice(filteredPosts.length / 2) : posts.slice(posts.length / 2)}</Col>
                <Col>{filteredPosts.length > 0 ? filteredPosts.slice(0, filteredPosts.length / 2) : posts.slice(0, posts.length / 2)}</Col>
                <Col xs={"2"}><WelcomeMessage/></Col>
            </Fragment>
        }
    }
    else {
        if (posts.length === 0) { // props.isLoading instead
            postView = <Spinner/>
        } else {
            postView = <Fragment>
               <Col className={styles.phoneView}>
                   {<WelcomeMessage/>}
                   {posts}
               </Col>
            </Fragment>
        }
    }
    return (
        <React.Fragment>
            <Container className={styles.container}>
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

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Home, useHttpErrorHandler))