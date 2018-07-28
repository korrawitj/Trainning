import React, { Component } from 'react';
import axios from '../../axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('/posts/' + this.props.id)
                    .then(response => {
                        this.setState({ loadedPost: response.data })
                    });
            }
        }
    }

    deletePosatHandler = () => {
        axios.delete('/posts/' + this.props.id)
            .then(respose => {
                console.log(respose);
            });
    }

    render() {
        let post = <p style={{ textAlign: 'center' }}>เลือกสินค้า</p>;
        if (this.props.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...</p>;
        }

        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePosatHandler} className="Delete">Delete</button>
                    </div>
                </div>
            );
        }

        return post;
    }
}

export default FullPost;