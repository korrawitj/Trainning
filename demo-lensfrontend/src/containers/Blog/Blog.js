import React, { Component } from 'react';

import './Blog.css';

class Blog extends Component {

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    render() {
        return (
            <div className="row">
            </div>
        );
    }
}

export default Blog;