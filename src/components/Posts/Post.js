import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import './Post.scss'
//import {__} from "@wordpress/i18n";
import axios from "axios";
import singlePost from "../Post/post";
import PropTypes from 'prop-types';
const Post =(props) => (
    <div className="Post">
    <h3>{props.title}</h3>
    <p> dangerouslySetInnerHTML{{__html:props.body}}</p>
</div>
);

Post.propTypes = {
title: PropTypes.string,
body: PropTypes.string,
};

Post.defaultProps = {
title: "Post title",
body: "Post body."
};




export default Post;

export class Posts extends Component{

postsEndpoint = 'http://mysite.com/wp-json/wp/v2/posts';

state = {
    posts: [],
    isLoaded: false,

}

componentDidMount() {
    axios

        .get(this.postsEndpoint)
        .then((res) => {
            console.log('response', res);
            this.setState({
                posts: res.data,
                isLoaded: true,
            });
        })
    .catch((err) =>
        {
            console.log

            (
                'API error', err);
        });

}



render() {
    return (
        <div className="posts">
            {this.state.isLoaded ? '' : <p>loading</p>}
            {this.state.posts.map((post) =>
                <singlePost title={post.title.rendered} body={post.content.rendered} key={post.id}/>
            )}
        </div>


    )
}

}