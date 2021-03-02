import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import './book.scss'
//import {__} from "@wordpress/i18n";
import axios from "axios";
import singlePost from "../Post/post";
/*const Post =(props) => (
    <div className="Book">
    <h3>{props.title}</h3>
    <p> dangerouslySetInnerHTML>{{__html:props.body}}</p>
</div>
);

Post.propTypes = {
title: PropTypes.string,
body: PropTypes.string,
};

Post.defaultProps = {
title: "Book title",
body: "Book body."
};




export default Post; */

export class Book extends Component{

BooksEndpoint = 'http://cburton5.bitlampsites.com/WPD/PHP/Final/wp-json/wp/v2/books';

state = {
    posts: [],
    isLoaded: false,

}

componentDidMount() {
    axios

        .get(this.BooksEndpoint)
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
                {this.state.isLoaded ? '' : <p>Loading</p>}
                {this.state.posts.map((post) =>
                    <Book title={books.title.rendered} body={books.content.rendered} imageURL={books.featured_media} key={books.id}/>
                )}
            </div>
        )
    }


}