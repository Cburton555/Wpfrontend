import React, {Component} from 'react';
import './Posts.scss'
import Post from '../Post/Post'

export class Posts extends Component{

    render(){
        return(
            <div className="posts">
                {this.props.posts.map((post) =>
                    <Post title={post.title.rendered}
                     authorimg={post._embedded.author[0].avatar_url[24]}
                          featuredprop={post._embedded['wp:featuredprop'][0].media_details.sizes.medium}
                     key={post.id} />
                    )}


            </div>
        )


    }
}