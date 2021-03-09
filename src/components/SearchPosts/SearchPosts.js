import React, {Component} from 'react';
import axios from "axios";
import { Button, TextField } from '@material-ui/core';

export class SearchPosts extends Component {
    postsEndpoint = 'http://cburton5.bitlampsites.com/WPD/PHP/Final/wp-json/wp/v2/books';

    state = {
        search: '',
    }

    //run when the component is added to the page
    getPosts() {
        axios
            .get(this.postsEndpoint, {
                params: {
                    search: this.state.search,
                    per_page: 12,
                    _embed: 1,
                }
            })
            .then((res) => {
                console.log('Response', res);

                // return posts to the app/parent
                // (onSearchResult() is passed in from app as a prop)
                this.props.onSearchResult(res.data);
            })
            .catch((err) => {
                console.log('API error', err);
            });
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (
            <form className="Search" onSubmit={(event) => this.handleSubmit(event)}>
                <TextField
                    label="Search..."
                    value={this.state.search}
                    onChange={(event) => this.setState({search: event.target.value})}
                />
                <Button color="primary" variant="contained" onClick={() => this.getPosts()} type="submit">Get Posts</Button>

            </form>
        ) // end return
    }

}


