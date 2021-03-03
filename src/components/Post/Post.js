import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

const Post = (props) => (
  <div className="Post">
  <h3>{props.title}</h3>
  <p>{props.author}</p>
      <img src={props.authorImg}/>

      </div>
      );
Post.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    authoring: PropTypes.string,

};

Post.defaultProps = {
    title: "post title",
    author: "default author",
    authorImg: "img url",
};
export default Post;

