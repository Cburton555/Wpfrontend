import React, {Component} from 'react';

class Posts extend Component {
    state = {
       posts: [{title:'Dream One',body:'I like dreams'}],
        posts: [{title:'Dream Two',body:'I like good dreams'}],
    }

    render(){
        return(
            <div> className="posts>
                {this.state.post.map((post:{body:string,title: string})} => (
                <div className={"post"}>
                    <h3>{post.title}</h3>
                    <h3>{post.body}</h3>
                </div>


                )}






            </div>
        )


    }
}