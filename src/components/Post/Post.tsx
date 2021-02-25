import React from 'react';
import styles from './Post.module.css';

const Post: React.FC = () => (
  <div className={styles.Post} data-testid="Post">
    Post Component
  </div>
);

export default Post;
