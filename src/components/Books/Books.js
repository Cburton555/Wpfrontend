import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import './Post.scss'
//import {__} from "@wordpress/i18n";
import axios from "axios";
import singlePost from "../Post/post";
const books =(props) => (
    <div className="books">
    <h3>{props.title}</h3>
    <p> dangerouslySetInnerHTML{{__html:props.body}}</p>
</div>
);

books.propTypes = {
title: PropTypes.string,
body: PropTypes.string,
};
books.defaultProps = {
title: "book title",
body: "book body."
};




export default books;

export class book extends Component{

postsEndpoint = 'http://cburton5.bitlampsites.com/WPD/PHP/Final/wp-json/wp/v2/posts';

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
        <div className="books">
            {this.state.isLoaded ? '' : <p>loading</p>}
            {this.state.posts.map((post) =>
                <singlePost title={post.title.rendered} body={post.content.rendered} key={post.id}/>
            )}
        </div>


    )
}

}