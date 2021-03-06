import React, {useEffect} from "react";

import * as actions from "../../../redux/actions/actions";
import {connect} from "react-redux";

import withErrorHandler from "../../../hoc/withErrorHandler";
import useHttpErrorHandler from "../../../hooks/httpErrorHandling";
import styles from "./PostPage.module.css"
import Spinner from "../../../components/UI/Spinner/Spinner";
import StyledButton from "../../../components/UI/StyledComponents/StyledButton";
import useDecodePost from "../../../hooks/decodePost";
import test_aspect_ratio from "./test_aspect_ratio.jpeg"

const PostPage = (props) => {
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
                              variant="custom_dark_blue"
                              pointerEvents={"none"}
                              buttonTitle={category}/>)
    });

    return  <article className={styles.article}>
        <span>{post.date}</span>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.divImg}>
            <img className={styles.img} src={test_aspect_ratio} alt={test_aspect_ratio}/>
        </div>
        <div className={styles.categories}>{categories}</div>
        <p className={styles.author}>{post.author}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(PostPage, useHttpErrorHandler))