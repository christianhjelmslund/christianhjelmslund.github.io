import React, {useEffect} from "react";

import * as actions from "../redux/actions/actions";
import {connect} from "react-redux";

import withErrorHandler from "../components/hoc/withErrorHandler";
import useHttpErrorHandler from "../hooks/httpErrorHandling";
import styles from "../styles/pages/PostPage.module.css"
import Spinner from "../components/UI/Spinner";
import StyledButton from "../components/UI/StyledButton";
import useDecodePost from "../hooks/decodePost";

const Post = (props) => {
    const {onFetchPost} = props
    useEffect(() => {
        if (!props.location.post) {
            let potentialPostId;
            potentialPostId = props.match.params["postId"];
            onFetchPost(potentialPostId)
        }
    }, [onFetchPost, props.location.post, props.location.state, props.match.params])
    let post = props.location.post ? props.location.post : props.post

    const content = useDecodePost(post)
    if (!post.author) return <Spinner/>

    const categories = post.category.map((category) => {
        return (<StyledButton key={category}
                              variant={"custom_dark_blue"}
                              noPointerEvents={true}
                              buttonTitle={category}/>)
    });
    return  <article className={styles.article}>
        <p className={styles.date}>{post.date}</p>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.divImg}>
            <img className={styles.img} src={post.thumbnail} alt={post.id}/>
        </div>
        <div className={styles.categories}>{categories}</div>
        <p className={styles.author}>{post.author}</p>
        <div className={styles.divImg}>
            <div className={styles.teaser}>{post.teaser}</div>
        </div>
        <div className={styles.content}>{content}</div>
    </article>
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPost: (id) => dispatch(actions.getSpecificPost(id))
    }
}

const mapStateToProps = state => {
    return {
        post: state.post.post,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Post, useHttpErrorHandler))